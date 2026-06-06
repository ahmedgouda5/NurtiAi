"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  Section,
  Inner,
  Left,
  Badge,
  BadgeIcon,
  Headline,
  Subtitle,
  StoreButtons,
  StoreBtn,
  StoreBtnIcon,
  StoreBtnText,
  StoreBtnLabel,
  StoreBtnName,
  Stats,
  StatPill,
  Right,
  CardA,
  CalorieBar,
  CalorieText,
  MacroRow,
  MacroPill,
  MealTitle,
  MealRow,
  CardB,
  ScanLabel,
  ScanFood,
  ScanKcal,
  StepsLabel,
  BarsRow,
  Bar,
} from "./styles";
import { theme } from "@/styles/theme";

const MobileApp: React.FC = () => {
  const { t } = useTranslation();

  const bars = [
    { h: 55 },
    { h: 40 },
    { h: 70 },
    { h: 85, active: true },
    { h: 60 },
    { h: 45 },
    { h: 30 },
  ];

  return (
    <Section>
      <Inner>
        <Left>
          <Badge>
            <BadgeIcon>📱</BadgeIcon>
            {t("mobilePreview.badge")}
          </Badge>

          <Headline>
            {t("mobilePreview.headline.normal")}
            <span>{t("mobilePreview.headline.highlight")}</span>
          </Headline>

          <Subtitle>{t("mobilePreview.subtitle")}</Subtitle>

          <StoreButtons>
            <StoreBtn href="#">
              <StoreBtnIcon>🍎</StoreBtnIcon>
              <StoreBtnText>
                <StoreBtnLabel>
                  {t("mobilePreview.store.apple.label")}
                </StoreBtnLabel>
                <StoreBtnName>
                  {t("mobilePreview.store.apple.name")}
                </StoreBtnName>
              </StoreBtnText>
            </StoreBtn>

            <StoreBtn href="#">
              <StoreBtnIcon>▶</StoreBtnIcon>
              <StoreBtnText>
                <StoreBtnLabel>
                  {t("mobilePreview.store.google.label")}
                </StoreBtnLabel>
                <StoreBtnName>
                  {t("mobilePreview.store.google.name")}
                </StoreBtnName>
              </StoreBtnText>
            </StoreBtn>
          </StoreButtons>

          <Stats>
            <StatPill>{t("mobilePreview.stats.rating")}</StatPill>
            <StatPill>{t("mobilePreview.stats.downloads")}</StatPill>
          </Stats>
        </Left>

        {/* ── Right ── */}
        <Right>
          {/* Card A – Nutrition */}
          <CardA>
            <CalorieBar />
            <CalorieText>{t("mobilePreview.cardA.calories")}</CalorieText>

            <MacroRow>
              <MacroPill color={theme.colors.primary}>
                <div className="pct">72%</div>
                <div className="lbl">
                  {t("mobilePreview.cardA.macros.protein")}
                </div>
              </MacroPill>
              <MacroPill color={theme.colors.amber}>
                <div className="pct">55%</div>
                <div className="lbl">
                  {t("mobilePreview.cardA.macros.carbs")}
                </div>
              </MacroPill>
              <MacroPill color={theme.colors.blue}>
                <div className="pct">48%</div>
                <div className="lbl">{t("mobilePreview.cardA.macros.fat")}</div>
              </MacroPill>
            </MacroRow>

            <MealTitle>{t("mobilePreview.cardA.mealsTitle")}</MealTitle>
            <MealRow>
              <span>{t("mobilePreview.cardA.meals.breakfast")}</span>
              <span>420 kcal</span>
            </MealRow>
            <MealRow>
              <span>{t("mobilePreview.cardA.meals.lunch")}</span>
              <span>680 kcal</span>
            </MealRow>
            <MealRow>
              <span>{t("mobilePreview.cardA.meals.dinner")}</span>
              <span>747 kcal</span>
            </MealRow>
          </CardA>

          {/* Card B – AI Scan */}
          <CardB>
            <ScanLabel>{t("mobilePreview.cardB.scanLabel")}</ScanLabel>
            <ScanFood>{t("mobilePreview.cardB.scanFood")}</ScanFood>
            <ScanKcal>{t("mobilePreview.cardB.scanKcal")}</ScanKcal>

            <StepsLabel>{t("mobilePreview.cardB.stepsLabel")}</StepsLabel>
            <BarsRow>
              {bars.map((b, i) => (
                <Bar key={i} h={b.h} $active={b.active} suppressHydrationWarning />
              ))}
            </BarsRow>
          </CardB>
        </Right>
      </Inner>
    </Section>
  );
};

export default MobileApp;
