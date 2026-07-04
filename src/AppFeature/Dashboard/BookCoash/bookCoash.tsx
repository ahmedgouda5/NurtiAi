"use client";

import { useState } from "react";
import { useCoachesData, type Coach } from "@/data/Coaches";
import {
  Page,
  PageHeader,
  PageTitle,
  PageSubtitle,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CoachName,
  CoachTitle,
  RatingRow,
  Stars,
  RateValue,
  ReviewsCount,
  Divider,
  CardBody,
  StatsRow,
  Stat,
  StatValue,
  StatLabel,
  SpecialtyTag,
  PriceRow,
  Price,
  BookButton,
} from "./style";
import CoachModal from "./CoashModel";

export default function BookCoash() {
  const coaches = useCoachesData();
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  return (
    <>
      <Page>
        <PageHeader>
          <PageTitle>Book a Coach</PageTitle>
          <PageSubtitle>
            Find the perfect nutrition coach to guide your health journey
          </PageSubtitle>
        </PageHeader>

        <Grid>
          {coaches.map((coach) => (
            <Card key={coach.id} onClick={() => setSelectedCoach(coach)}>
              <CardHeader $gradient={coach.gradient}>
                <Avatar $gradient={coach.gradient}>{coach.initials}</Avatar>
                <CoachName>{coach.name}</CoachName>
                <CoachTitle>{coach.title}</CoachTitle>
                <RatingRow>
                  <Stars>★★★★★</Stars>
                  <RateValue>{coach.rate}</RateValue>
                  <ReviewsCount>({coach.reviews})</ReviewsCount>
                </RatingRow>
              </CardHeader>

              <Divider />

              <CardBody>
                <SpecialtyTag>{coach.specialty}</SpecialtyTag>

                <StatsRow>
                  <Stat>
                    <StatValue>{coach.experience}+</StatValue>
                    <StatLabel>Years</StatLabel>
                  </Stat>
                  <Stat>
                    <StatValue>{coach.sessionsCompleted.toLocaleString()}</StatValue>
                    <StatLabel>Sessions</StatLabel>
                  </Stat>
                  <Stat>
                    <StatValue>{coach.reviews}</StatValue>
                    <StatLabel>Reviews</StatLabel>
                  </Stat>
                </StatsRow>

                <PriceRow>
                  <Price>
                    ${coach.price} <span>/session</span>
                  </Price>
                </PriceRow>

                <BookButton>View Profile & Book</BookButton>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Page>

      <CoachModal coach={selectedCoach} onClose={() => setSelectedCoach(null)} />
    </>
  );
}
