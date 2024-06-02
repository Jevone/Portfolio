"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci'

const link = [
  {
    nama: "home",
    path: "/",
  },
  {
    nama: "services",
    path: "/services",
  },
  {
    nama: "resume",
    path: "/resume",
  },
  {
    nama: "work",
    path: "/work",
  },
  {
    nama: "contact",
    path: "/contact",
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#bc48f9]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Jefri <span className="text-[#bc48f9]">.</span>  
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {link.map((link, index) => {
            return (
              <Link 
              href={link.path} 
              key={index} 
              className={`${
                link.path === pathname && "text-[#bc48f9] border-b-2 border-[#bc48f9]" } text-xl capitalize hover:text-[#bc48f9] transition-all`}>
                {link.nama}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
