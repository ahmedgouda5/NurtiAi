"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

import {
  FooterShell,
  FooterTop,
  Brand,
  LogoText,
  Description,
  Socials,
  SocialLink,
  Column,
  ColumnTitle,
  FooterLink,
  Bottom,
} from "./styles";
import { Mark } from "../Navbar/styles";

export function Footer() {
  const { t } = useTranslation();

  return (
    <FooterShell>
      <div className="container">
        <FooterTop>
          <Brand>
            <div className="flex items-center gap-2">
              <Mark>
                <Image
                  src="/LogoLeaf.ico"
                  alt="NutriAI logo"
                  width={32}
                  height={32}
                />
              </Mark>
              <LogoText>NutriAI</LogoText>
            </div>

            <Description>{t("footer.description")}</Description>

            <Socials>
              <SocialLink href="#">
                <FiTwitter />
              </SocialLink>

              <SocialLink href="#">
                <FiInstagram />
              </SocialLink>

              <SocialLink href="#">
                <FaTiktok />
              </SocialLink>

              <SocialLink href="#">
                <FiYoutube />
              </SocialLink>
            </Socials>
          </Brand>

          <Column>
            <ColumnTitle>{t("footer.product.title")}</ColumnTitle>
            <FooterLink href="#features">
              {t("footer.product.features")}
            </FooterLink>
            <FooterLink href="#pricing">
              {t("footer.product.pricing")}
            </FooterLink>
            <FooterLink href="#">{t("footer.product.mobileApp")}</FooterLink>
            <FooterLink href="#">{t("footer.product.api")}</FooterLink>
          </Column>

          <Column>
            <ColumnTitle>{t("footer.support.title")}</ColumnTitle>
            <FooterLink href="#">{t("footer.support.helpCenter")}</FooterLink>
            <FooterLink href="#">{t("footer.support.community")}</FooterLink>
            <FooterLink href="#">{t("footer.support.coaches")}</FooterLink>
            <FooterLink href="#">{t("footer.support.blog")}</FooterLink>
          </Column>

          <Column>
            <ColumnTitle>{t("footer.company.title")}</ColumnTitle>
            <FooterLink href="#">{t("footer.company.about")}</FooterLink>
            <FooterLink href="#">{t("footer.company.careers")}</FooterLink>
            <FooterLink href="#">{t("footer.company.privacy")}</FooterLink>
            <FooterLink href="#">{t("footer.company.terms")}</FooterLink>
          </Column>
        </FooterTop>

        <Bottom>
          <span>{t("footer.bottom.copyright")}</span>

          <span>{t("footer.bottom.tagline")}</span>
        </Bottom>
      </div>
    </FooterShell>
  );
}
