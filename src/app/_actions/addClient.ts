"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { addClientSchema } from "@/lib/validations/addClient";

export const addClient = async (prevState: unknown, formData: FormData) => {
  const result = addClientSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!result.success) {
    return {
      errors: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  try {
    const supabase = await createSupabaseServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return {
        status: 400,
        message: "برجاء تسجيل الدخول الى حسابك",
      };
    }

    const { error } = await supabase.from("clients").insert({
      name: result.data.name,
      phone: result.data.phone,
      country: result.data.country,
      appointment_date: result.data.date,
      appointment_day: new Date(result.data.date).toLocaleDateString("en-US", {
        weekday: "long",
      }),
      appointment_time: result.data.time,
      employee_id: user.id,
      employee_email: user.email,
    });

    if (error) {
      return {
        status: 400,
        message: "هذا العميل مسجل بالفعل",
      };
    }

    return {
      status: 201,
      message: "تمت اضافة العميل بنجاح",
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      message: "خطأ غير متوقع، تحقق من اتصالك",
    };
  }
};
