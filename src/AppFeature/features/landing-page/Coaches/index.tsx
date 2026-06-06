"use client";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Bottom,
  Card,
  Container,
  Divider,
  Grid,
  Info,
  Label,
  Name,
  Price,
  Reviews,
  Section,
  Stars,
  Title,
  Top,
  Value,
} from "./style";
import { useCoachesData } from "@/data/Coaches";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { Button } from "@/AppFeature/shared/Button";
import { theme } from "@/styles/theme";
import { SpanItalic } from "../Hero/styles";
const Coaches = () => {
  const { t } = useTranslation();
  const coaches = useCoachesData();
  return (
    <Section id="coaches">
      <Container>
        <SectionTitle
          eyebrow={t("coaches.eyebrow")}
          title={
            <>
              {t("coaches.title.normal")}{" "}
              <SpanItalic>{t("coaches.title.italic")}</SpanItalic>
            </>
          }
          description={t("coaches.description")}
        />
        <Grid>
          {coaches.map((coach) => (
            <Card key={coach.id}>
              <Top>
                <Avatar gradient={coach.gradient}>{coach.initials}</Avatar>
                <Name>{coach.name}</Name>
                <Title>{coach.title}</Title>
                <Stars>★★★★★</Stars>
                <Reviews>
                  {coach.rate} ({coach.reviews} {t("coaches.labels.reviews")})
                </Reviews>
              </Top>
              <Divider />
              <Bottom>
                <Info>
                  <div>
                    <Label>{t("coaches.labels.specialty")}</Label>
                    <Value>{coach.specialty}</Value>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <Label>{t("coaches.labels.rate")}</Label>
                    <Price>
                      ${coach.price}
                      {t("coaches.labels.perSession")}
                    </Price>
                  </div>
                </Info>
                <Button
                  style={{
                    background: theme.colors.primaryDark,
                    width: "100%",
                  }}
                >
                  {t("coaches.cta")}
                </Button>
              </Bottom>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
export default Coaches;
