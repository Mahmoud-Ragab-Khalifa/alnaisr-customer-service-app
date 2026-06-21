"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionState } from "@/types/actionState";
import { useRouter } from "next/navigation";
import { login } from "../_actions/auth";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();

  const initialState: ActionState = {
    errors: {},
    message: "",
    status: null,
    formData: null,
  };

  const [state, action, pending] = useActionState(login, initialState);

  useEffect(() => {
    if (state && state.status && state.message && !pending) {
      if (state.status === 201) {
        toast.success(state.message);

        router.replace("/");
      } else {
        toast.error(state.message);
      }
    }
  }, [pending, router, state]);

  return (
    <div className="p-4 md:p-0 w-full max-w-md">
      <form
        action={action}
        className="flex flex-col gap-7 glass-strong rounded-lg p-6 md:p-8 glow-border"
      >
        <h1 className="text-center md:text-xl font-bold italic glow-text mb-4">
          سجل الدخول الى حسابك لمواصلة العمل
        </h1>

        <div className="grid gap-4">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="أدخل بريدك الإلكتروني"
            defaultValue={state.formData?.get("email") as string}
          />
          {state.errors?.email && (
            <p className="text-red-500 italic font-bold text-sm">
              {state.errors?.email}
            </p>
          )}
        </div>

        <div className="grid gap-4">
          <Label htmlFor="password">كلمة المرور</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="أدخل كلمة المرور الخاصة بك"
            defaultValue={state.formData?.get("password") as string}
          />
          {state.errors?.password && (
            <p className="text-red-500 italic font-bold text-sm">
              {state.errors?.password}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full mt-4"
          variant={"default"}
          size={"lg"}
        >
          {pending ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
