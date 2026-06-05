"use client";

import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import {
  Bar,
  Inner,
  Brand,
  Mark,
  DesktopNav,
  NavLink,
  Actions,
  MobileMenuButton,
  MobileNav,
  MobileLink,
  MobileAuth,
} from "./styles";

import { SpanItalic } from "@/AppFeature/features/landing-page/Hero/styles";
import SignUp from "@/AppFeature/auth/register/page";
import SignIn from "@/AppFeature/auth/login/page";

const links = [
  { href: "#features", label: "Features" },
  { href: "#sponsers", label: "Sponsers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#coaches", label: "Coaches" },
  { href: "#testimonials", label: "Reviews" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <Bar>
      <div className="container">
        <Inner>
          {/* LOGO ALWAYS */}
          <Brand href="/">
            <Mark>NA</Mark>
            <h1>
              Nutri<SpanItalic>AI</SpanItalic>
            </h1>
          </Brand>

          {/* DESKTOP ONLY NAV + AUTH */}
          <DesktopNav>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </DesktopNav>

          <Actions>
            <div className="hidden md:flex">
              <SignIn />
              <SignUp />
            </div>

            {/* MOBILE MENU BUTTON ONLY */}
            <MobileMenuButton
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <FiMenu />
            </MobileMenuButton>
          </Actions>
        </Inner>

        {/* MOBILE DROPDOWN MENU */}
        <MobileNav $open={open}>
          {links.map((link) => (
            <MobileLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </MobileLink>
          ))}

          <MobileAuth>
            <SignIn />
            <SignUp />
          </MobileAuth>
        </MobileNav>
      </div>
    </Bar>
  );
}
