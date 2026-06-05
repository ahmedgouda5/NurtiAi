import React from "react";

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
import { coachesData } from "@/data/Coaches";
import { SectionTitle } from "@/AppFeature/shared/SectionTitle";
import { Button } from "@/AppFeature/shared/Button";
import { theme } from "@/styles/theme";
import { SpanItalic } from "../Hero/styles";

const Coaches = () => {
  return (
    <Section id="coaches">
      <Container>
        <SectionTitle
          eyebrow={"👤Expert Team"}
          title={
            <>
              Book sessions with <SpanItalic>certified experts</SpanItalic>
            </>
          }
          description="Our coaches and doctors monitor your NutriAI data in real time and provide personalized guidance tailored exactly to your journey.

"
        />
        <Grid>
          {coachesData.map((coach) => (
            <Card key={coach.id}>
              <Top>
                <Avatar gradient={coach.gradient}>{coach.initials}</Avatar>

                <Name>{coach.name}</Name>

                <Title>{coach.title}</Title>

                <Stars>★★★★★</Stars>

                <Reviews>
                  {coach.rate} ({coach.reviews} reviews)
                </Reviews>
              </Top>

              <Divider />

              <Bottom>
                <Info>
                  <div>
                    <Label>Specialty</Label>
                    <Value>{coach.specialty}</Value>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <Label>Rate</Label>
                    <Price>${coach.price}/session</Price>
                  </div>
                </Info>

                <Button
                  style={{
                    background: theme.colors.primaryDark,
                    width: "100%",
                  }}
                >
                  Book Session
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
