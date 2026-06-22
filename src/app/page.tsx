import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import AddClientForm from "./_components/AddClientForm";
import { Button } from "@/components/ui/button";

const HomePage = async () => {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();

  const isAdmin = profile?.role === "admin";

  return (
    <main className="min-h-[calc(100dvh-66px)] glass flex items-center justify-center px-4 md:p-0">
      {isAdmin ? (
        <div className="mx-auto max-w-xl space-y-5">
          <h1 className="font-bold text-xl text-center">
            اهلا بكم فى صفحة الادمن يمكنكم تعديل اى شيئ فى النظام من هنا
          </h1>

          <Button className="w-full text-xl" size={"lg"}>
            حذف جميع العملاء لبدء شهر جديد
          </Button>
          <Button className="w-full text-xl" size={"lg"}>
            طباعة تقرير كامل بجميع العملاء
          </Button>
          <Button className="w-full text-xl" size={"lg"}>
            اجراء تعديل او حذف فى العملاء الحاليين
          </Button>
          <Button className="w-full text-xl" size={"lg"}>
            اضافة موظف جديد انضم الى العمل
          </Button>
          <Button className="w-full text-xl" size={"lg"}>
            حذف موظف غادر العمل
          </Button>
          <Button className="w-full text-xl" size={"lg"}>
            انهاء جلسة العمل اليومية
          </Button>
        </div>
      ) : (
        <AddClientForm />
      )}
    </main>
  );
};

export default HomePage;
