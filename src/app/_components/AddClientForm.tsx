"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, dates, times } from "@/constants/addClient";
import { ActionState } from "@/types/actionState";
import { useActionState, useEffect } from "react";
import { addClient } from "../_actions/addClient";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddClientForm = () => {
  const router = useRouter();

  const initialState: ActionState = {
    errors: {},
    message: "",
    status: null,
    formData: null,
  };

  const [state, action, pending] = useActionState(addClient, initialState);

  useEffect(() => {
    if (state && state.status && state.message && !pending) {
      if (state.status === 201) {
        toast.success(state.message);

        router.replace("/clients");
      } else {
        toast.error(state.message);
      }
    }
  }, [pending, router, state]);

  return (
    <div className="p-4 md:p-0 w-full max-w-4xl">
      <form
        action={action}
        className="space-y-5 md:space-y-10 glass-strong rounded-lg p-6 md:p-8"
      >
        <h1 className="text-center md:text-xl font-bold italic glow-text mb-10 md:mb-12">
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
              defaultValue={state.formData?.get("name") as string}
            />
            {state.errors?.name && (
              <p className="text-red-500 italic font-bold text-sm">
                {state.errors?.name}
              </p>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="phone">رقم الهاتف</Label>
            <Input
              name="phone"
              type="text"
              id="phone"
              placeholder="أدخل رقم العميل"
              defaultValue={state.formData?.get("phone") as string}
            />
            {state.errors?.phone && (
              <p className="text-red-500 italic font-bold text-sm">
                {state.errors?.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="grid gap-3">
            <Select
              dir="rtl"
              name="date"
              defaultValue={state.formData?.get("date") as string}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="التاريخ" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {dates.map((date) => (
                    <SelectItem key={date.value} value={date.value}>
                      {date.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {state.errors?.date && (
              <p className="text-red-500 italic font-bold text-sm">
                {state.errors?.date}
              </p>
            )}
          </div>

          <div className="grid gap-3">
            <Select
              dir="rtl"
              name="time"
              defaultValue={state.formData?.get("time") as string}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="التوقيت" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {times.map((time) => (
                    <SelectItem key={time.value} value={time.value}>
                      {time.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {state.errors?.time && (
              <p className="text-red-500 italic font-bold text-sm">
                {state.errors?.time}
              </p>
            )}
          </div>

          <div className="grid gap-3">
            <Select
              dir="rtl"
              name="country"
              defaultValue={state.formData?.get("country") as string}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="بلد التقديم" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {state.errors?.country && (
              <p className="text-red-500 italic font-bold text-sm">
                {state.errors?.country}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
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
