"use client";
import { sponsers } from "@/data/sponsers";
import { Box, Heading, SponserSection } from "./style";
import { Section } from "../Hero/styles";
import { useTranslation } from "react-i18next";

const Sponser = () => {
  const { t } = useTranslation();
  return (
    <Section id="sponsers">
      <SponserSection>
        <Heading>{t("Sponsers.Trust")}</Heading>
        <Box>
          {sponsers.map((sponser) => (
            <div key={sponser.name}>{sponser.name}</div>
          ))}
        </Box>
      </SponserSection>
    </Section>
  );
};

export default Sponser;
