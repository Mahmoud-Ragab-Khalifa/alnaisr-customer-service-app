"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { loginSchema } from "@/lib/validations/auth";

export const login = async (prevState: unknown, formData: FormData) => {
  const result = loginSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return {
      errors: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  try {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: result.data.email,
      password: result.data.password,
    });

    if (error) {
      return {
        status: error.status,
        message: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
      };
    }

    if (data.user && !error) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        full_name: data.user.email?.slice(0, data.user.email?.indexOf("@")),
        role: data.user.email === "admerna@admin.org" ? "admin" : "employee",
      });
    }

    return {
      status: 201,
      message: "تم تسجيل الدخول بنجاح",
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      message: "خطأ غير متوقع، تحقق من اتصالك",
    };
  }
};
