import { sponsers } from "@/data/sponsers";
import { Box, Heading, SponserSection } from "./style";
import { Section } from "../Hero/styles";

const Sponser = () => {
  return (
    <Section id="sponsers">
      <SponserSection>
        <Heading>Trusted by health professionals at</Heading>
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
