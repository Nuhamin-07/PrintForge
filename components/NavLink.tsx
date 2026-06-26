"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={`px-4 py-2 transition-colors rounded-md cursor-pointer hover:text-orange-400 ${pathname.startsWith(href) ? "text-orange-400" : "text-gray-700"}`}
      href={href}
    >
      {children}
    </Link>
  );
}
