"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  return (
    <div className="p-4 md:p-0 w-full max-w-md">
      <form className="flex flex-col gap-6 glass-strong rounded-lg p-6 md:p-8 glow-border">
        <h1 className="text-center md:text-xl font-bold italic glow-text mb-4">
          سجل الدخول الى حسابك لمواصلة العمل
        </h1>

        <div className="grid gap-4">
          <Label htmlFor="name">الأسم</Label>
          <Input name="name" id="name" type="text" placeholder="أدخل اسمك" />
        </div>

        <div className="grid gap-4">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-4"
          variant={"default"}
          size={"lg"}
        >
          سجل الدخول
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
