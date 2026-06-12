"use client";
import { useCallback, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";

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

import { Button } from "@/AppFeature/shared/Button";
import { SpanItalic } from "@/AppFeature/features/landing-page/Hero/styles";
import SignIn from "@/AppFeature/auth/login/page";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../Button/styles";
import { theme } from "@/styles/theme";
import { FaRocket } from "react-icons/fa6";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const links = [
    { href: "#features", label: t("navbar.Features") },
    { href: "#sponsers", label: t("navbar.Sponsers") },
    { href: "#pricing", label: t("navbar.Pricing") },
    { href: "#coaches", label: t("navbar.Coaches") },
    { href: "#testimonials", label: t("navbar.Reviews") },
  ];

  const currentLang = i18n.language || "en";

  const toggleLanguage = useCallback(() => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  }, [i18n, currentLang]);

  return (
    <Bar>
      <div className="container">
        <Inner>
          <Brand>
            <Link href="/" className="flex items-center gap-3">
              <Mark>
                <Image
                  width={90}
                  height={90}
                  src="/LogoLeaf.ico"
                  alt="logo leaf"
                />
              </Mark>
              <h1>
                Nutri<SpanItalic>AI</SpanItalic>
              </h1>
            </Link>
          </Brand>

          <DesktopNav>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </DesktopNav>

          <Actions>
            <div className="hidden md:flex gap-2">
              <Button onClick={toggleLanguage}>
                {currentLang === "en" ? "Ar" : "En"}
              </Button>

              <SignIn />
              <ButtonLink
                style={{
                  backgroundColor: theme.colors.primaryDark,
                  color: "black",
                }}
                href="/auth/register"
              >
                <FaRocket size={18} /> {t("navbar.Sign Up")}
              </ButtonLink>
            </div>

            <MobileMenuButton
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <FiMenu />
            </MobileMenuButton>
          </Actions>
        </Inner>

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
            <ButtonLink href="/auth/register">{t("navbar.Sign Up")}</ButtonLink>

            <Button onClick={toggleLanguage}>
              {currentLang === "en" ? "العربية" : "English"}
            </Button>
          </MobileAuth>
        </MobileNav>
      </div>
    </Bar>
  );
}
