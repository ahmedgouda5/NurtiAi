"use client";

import { useTranslation } from "react-i18next";
import { Actions, Banner, Section, Text, Title } from "./styles";
import { SpanItalic } from "../Hero/styles";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { IoIosRocket } from "react-icons/io";
import SignIn from "@/AppFeature/auth/login/page";
import { ButtonLink } from "@/AppFeature/shared/Button/styles";
import { theme } from "@/styles/theme";
import { FaRocket } from "react-icons/fa6";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { FcBusinessman } from "react-icons/fc";

import { Button } from "@/AppFeature/shared/Button";
import useUserStore from "@/store/User.Store";
import { Logout } from "@/AppFeature/auth/serivces/Auth";
import Link from "next/link";
export function CTA() {
  const { t } = useTranslation();
  const { ref, isVisible } = useInViewAnimation();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const handleLogout = () => {
    Logout();
    clearUser();
  };
  return (
    <Section>
      <div className="container">
        <Banner ref={ref as React.Ref<HTMLDivElement>} $isVisible={isVisible}>
          <SectionTitle
            eyebrow={
              <span className="flex items-center gap-2">
                <IoIosRocket size={18} /> {t("cta.eyebrow")}
              </span>
            }
          />
          <Title>
            {t("cta.title.normal")}{" "}
            <SpanItalic>{t("cta.title.highlight")}</SpanItalic>{" "}
            {t("cta.title.suffix")}
          </Title>
          <Text>{t("cta.text")}</Text>
          {user ? (
            <div className="flex items-center justify-center gap-3 ml-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                style={{
                  backgroundColor: theme.colors.primaryDark,
                  color: "black",
                }}
                title={`${user.firstName} ${user.lastName}`}
              >
                <Link href="/dashboard/profile">
                  <FcBusinessman />
                </Link>
              </div>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <>
              <Actions>
                <ButtonLink
                  style={{
                    backgroundColor: theme.colors.primaryDark,
                    color: "black",
                  }}
                  href="/auth/register"
                >
                  <FaRocket size={18} /> {t("navbar.Sign Up")}
                </ButtonLink>
                <SignIn />
              </Actions>
            </>
          )}
        </Banner>
      </div>
    </Section>
  );
}
