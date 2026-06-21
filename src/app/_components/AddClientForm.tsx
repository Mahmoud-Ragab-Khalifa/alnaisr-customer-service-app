"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddClientForm = () => {
  const pending = false;

  return (
    <div className="p-4 md:p-0 w-full max-w-4xl">
      <form action="" className="space-y-10 glass-strong rounded-lg p-6 md:p-8">
        <h1 className="text-center md:text-xl font-bold italic glow-text mb-10 md:mb-15">
          يمكنك اضافة عميلك الجديد من هنا
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="grid gap-3">
            <Label htmlFor="name">الأسم</Label>
            <Input
              name="name"
              type="text"
              id="name"
              placeholder="أدخل اسم العميل"
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input
              name="phone"
              type="text"
              id="phone"
              placeholder="أدخل رقم العميل"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <span>التاريخ</span>
          <span>اليلوم</span>
          <span>التوقيت</span>
          <span>بلد التقديم</span>
        </div>

        <Button
          type="submit"
          className="w-full mt-4"
          variant={"default"}
          size={"lg"}
        >
          {pending ? "جاري اضافة العميل..." : "اضافة العميل"}
        </Button>
      </form>
    </div>
  );
};

export default AddClientForm;
