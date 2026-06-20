"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 glass-strong">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="text-xl md:text-2xl">
          مكتب النسر
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href={"/"}
            className={`${pathname === "/" ? "text-primary" : "text-foreground"} text-xl md:text-2xl`}
          >
            الرئيسية
          </Link>

          <Link
            href={"/clients"}
            className={`${pathname === "/clients" ? "text-primary" : "text-foreground"} text-xl md:text-2xl`}
          >
            العملاء
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
