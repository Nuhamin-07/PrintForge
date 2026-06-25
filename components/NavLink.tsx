import Link from "next/link";
import type { NavLinkProps } from "@/types";

export default function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 ${isActive ? "text-orange-accent" : "text-gray-700"}  transition-colors rounded-md cursor-pointer hover:text-orange-accent`}
    >
      {children}
    </Link>
  );
}
