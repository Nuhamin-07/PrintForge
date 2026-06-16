import Link from "next/link";
import Image from "next/image";
import PFLogoIcon from "@/public/printforge-logo-icon.svg";
import NavLink from "@/app/components/NavLink";
import PFLogo from "@/public/printforge-logo.svg";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            {/* Desktop Logo */}
            <Image
              src={PFLogo.src}
              alt="PrintForge Logo"
              className="w-50 h-auto hidden md:block"
              width={200}
              height={50}
            />
            {/* Mobile Logo */}
            <Image
              src={PFLogoIcon.src}
              alt="PrintForge Logo"
              className="w-10 h-auto block md:hidden"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/3d-models">3D Models</NavLink>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
