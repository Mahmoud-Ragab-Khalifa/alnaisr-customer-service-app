import { createSupabaseServerClient } from "@/lib/supabase/server-client";

const ClientsPage = async () => {
  const supabase = await createSupabaseServerClient();

  const { data: clients } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: true });

  return (
    <main className="min-h-[calc(100dvh-66px)] glass p-4">
      {clients && clients.length > 0 ? (
        <div className="overflow-x-auto glass-strong rounded-xl">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-center text-orange-400">الاسم</th>
                <th className="p-4 text-center text-orange-400">أضيف بواسطة</th>
                <th className="p-4 text-center text-orange-400">رقم الهاتف</th>
                <th className="p-4 text-center text-orange-400">الدولة</th>
                <th className="p-4 text-center text-orange-400">التاريخ</th>
                <th className="p-4 text-center text-orange-400">اليوم</th>
                <th className="p-4 text-center text-orange-400">الوقت</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 whitespace-nowrap text-center">
                    {client.name}
                  </td>

                  <td className="p-4 whitespace-nowrap text-center">
                    {client.employee_email.slice(
                      0,
                      client.employee_email.indexOf("@"),
                    )}
                  </td>

                  <td className="p-4 whitespace-nowrap text-center" dir="ltr">
                    {client.phone}
                  </td>

                  <td className="p-4 whitespace-nowrap text-center">
                    {client.country}
                  </td>

                  <td className="p-4 whitespace-nowrap text-center">
                    {client.appointment_date}
                  </td>

                  <td className="p-4 whitespace-nowrap text-center">
                    {client.appointment_day}
                  </td>

                  <td className="p-4 whitespace-nowrap text-center">
                    {client.appointment_time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex min-h-75 items-center justify-center">
          <p className="text-muted-foreground">لا يوجد عملاء حالياً</p>
        </div>
      )}
    </main>
  );
};

export default ClientsPage;
