import React from "react";
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
            Mobile App
          </Badge>

          <Headline>
            Track anywhere,<span>anytime</span>
          </Headline>

          <Subtitle>
            Available on iOS and Android. Sync with Apple Health, Google Fit,
            Fitbit, and 50+ devices. Real-time notifications and smart reminders
            keep you on track 24/7.
          </Subtitle>

          <StoreButtons>
            <StoreBtn href="#">
              <StoreBtnIcon>🍎</StoreBtnIcon>
              <StoreBtnText>
                <StoreBtnLabel>Download on</StoreBtnLabel>
                <StoreBtnName>App Store</StoreBtnName>
              </StoreBtnText>
            </StoreBtn>

            <StoreBtn href="#">
              <StoreBtnIcon>▶</StoreBtnIcon>
              <StoreBtnText>
                <StoreBtnLabel>Get it on</StoreBtnLabel>
                <StoreBtnName>Google Play</StoreBtnName>
              </StoreBtnText>
            </StoreBtn>
          </StoreButtons>

          <Stats>
            <StatPill>⭐ 4.9 stars (48K ratings)</StatPill>
            <StatPill>⬇ 2M+ downloads</StatPill>
          </Stats>
        </Left>

        {/* ── Right ── */}
        <Right>
          {/* Card A – Nutrition */}
          <CardA>
            <CalorieBar />
            <CalorieText>Calories: 1847 / 2200</CalorieText>

            <MacroRow>
              <MacroPill color={theme.colors.primary}>
                <div className="pct">72%</div>
                <div className="lbl">Protein</div>
              </MacroPill>
              <MacroPill color={theme.colors.amber}>
                <div className="pct">55%</div>
                <div className="lbl">Carbs</div>
              </MacroPill>
              <MacroPill color={theme.colors.blue}>
                <div className="pct">48%</div>
                <div className="lbl">Fat</div>
              </MacroPill>
            </MacroRow>

            <MealTitle>🔥 Today&apos;s Meals</MealTitle>
            <MealRow>
              <span>Breakfast</span>
              <span>420 kcal</span>
            </MealRow>
            <MealRow>
              <span>Lunch</span>
              <span>680 kcal</span>
            </MealRow>
            <MealRow>
              <span>Dinner</span>
              <span>747 kcal</span>
            </MealRow>
          </CardA>

          {/* Card B – AI Scan */}
          <CardB>
            <ScanLabel>AI Scan Result</ScanLabel>
            <ScanFood>🥗 Greek Salad</ScanFood>
            <ScanKcal>185 kcal</ScanKcal>

            <StepsLabel>Weekly Steps</StepsLabel>
            <BarsRow>
              {bars.map((b, i) => (
                <Bar key={i} h={b.h} active={b.active} />
              ))}
            </BarsRow>
          </CardB>
        </Right>
      </Inner>
    </Section>
  );
};

export default MobileApp;
