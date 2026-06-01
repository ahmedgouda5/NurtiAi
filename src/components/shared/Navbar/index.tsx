"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Button } from "../Button";
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
} from "./styles";
import { theme } from "@/styles/theme";
import { FaRocket } from "react-icons/fa";
import { SpanItalic } from "@/components/features/landing-page/Hero/styles";

const links = [
  { href: "#features", label: "Features" },
  { href: "#sponsers", label: "Sponsers" },
  { href: "#pricing", label: "pricing" },
  { href: "#coaches", label: "Coaches" },
  { href: "#testimonials", label: "Reviews" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Bar>
      <div className="container">
        <Inner>
          <Brand href="/">
            <Mark>NA</Mark>
            <h1>
              Nutri<SpanItalic>AI</SpanItalic>
            </h1>
          </Brand>

          <DesktopNav aria-label="Primary">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </DesktopNav>

          <Actions>
            <Button href="/login" variant="secondary">
              Sign In
            </Button>
            <Button
              style={{
                backgroundColor: theme.colors.primaryDark,
                color: "black",
              }}
              href="/register"
              variant="primary"
            >
              <FaRocket size={18} /> try for free
            </Button>
            <MobileMenuButton
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-label="Toggle navigation"
            >
              <FiMenu />
            </MobileMenuButton>
          </Actions>
        </Inner>

        <MobileNav $open={open} aria-label="Mobile navigation">
          {links.map((link) => (
            <MobileLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </MobileLink>
          ))}
        </MobileNav>
      </div>
    </Bar>
  );
}
