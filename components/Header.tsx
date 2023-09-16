"use client";
import { useState } from "react";
import navMenus from "@/content/header/navMenus";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const pathname = usePathname();
  // USESTATE
  // const [active, setActive] = useState<boolean>(false)
  const [menuId, setMenuId] = useState<number>(1);

  // HANDLERS
  const handleMenuId = (e: any) => {
    setMenuId(e.currentTarget.dataset.id);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          {/* <p>picture</p> */}
          <p className="font-bold text-inherit">Enoch Ansah</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navMenus.map((menu) => {
          const { id, href, label } = menu;
          return (
            <NavbarItem key={id}>
              <Link color="foreground" href={href}>
                <div
                  key={id}
                  className={`${
                    id == menuId && "bg-secondary-100 text-white rounded-full"
                  } px-4 py-1`}
                  data-id={id}
                  onClick={handleMenuId}
                >
                  <p>{label}</p>
                </div>
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu>
        {navMenus.map((menu) => {
          const { id, label, href } = menu;
          return (
            <NavbarMenuItem key={id} onClick={handleMenuItemClick}>
              <Link
                className="w-full"
                href={href}
                size="lg"
                onClick={handleMenuItemClick}
              >
                {label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
