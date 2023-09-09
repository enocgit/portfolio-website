"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navMenus from "@/content/header/navMenus";
import { useState } from "react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  // USESTATE
  // const [active, setActive] = useState<boolean>(false)
  const [menuId, setMenuId] = useState<number>(1);

  // HANDLERS
  const handleMenuId = (e: any) => {
    setMenuId(e.currentTarget.dataset.id);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center h-20 bg-white bg-opacity-95 backdrop-blur-sm">
      <div className="flex justify-between w-10/12">
        <section className="flex items-center gap-3">
          {/* Profile image */}
          <div className="relative w-5 h-5">
            <Image src="" alt="" fill style={{ objectFit: "cover" }} />
          </div>
          {/* Name */}
          <div>
            <h1>Enoch Ansah</h1>
          </div>
        </section>
        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-14">
            {navMenus.map((navMenu) => {
              const { id, name, link } = navMenu;
              return (
                <li
                  key={id}
                  className={`${
                    id == menuId && "bg-secondary-100 text-white rounded-full"
                  } px-4 py-1`}
                  data-id={id}
                  onClick={handleMenuId}
                >
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
    // Landing page
  );
};

export default Header;
