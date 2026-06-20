"use client";

import { Home, Plane, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 glass-strong">
      <div className="container flex items-center justify-between">
        <Link
          href={"/"}
          className="text-xl md:text-2xl flex items-center gap-1"
        >
          مكتب النسر
          <Plane className="text-orange-400" />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href={"/"}
            className={`${pathname === "/" ? "text-primary" : "text-foreground"} text-xl md:text-2xl flex items-center gap-1`}
          >
            <Home className="hidden md:block text-orange-400" />
            الرئيسية
          </Link>

          <Link
            href={"/clients"}
            className={`${pathname === "/clients" ? "text-primary" : "text-foreground"} text-xl md:text-2xl flex items-center gap-1`}
          >
            <Users className="hidden md:block text-orange-400" />
            العملاء
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
