import { z } from "zod";

export const addClientSchema = z.object({
  name: z
    .string()
    .min(1, "اسم العميل مطلوب")
    .min(3, "اسم العميل يجب أن يكون 3 أحرف على الأقل"),

  phone: z
    .string()
    .min(1, "رقم الهاتف مطلوب")
    .regex(/^01[0125][0-9]{8}$/, "يرجى إدخال رقم هاتف مصري صحيح"),

  country: z.string().min(1, "الدولة مطلوبة"),

  date: z.string().min(1, "تاريخ الموعد مطلوب"),

  time: z.string().min(1, "وقت الموعد مطلوب"),
});
