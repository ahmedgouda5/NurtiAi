"use client";

import Link from "next/link";
import {
  Scene,
  Grain,
  OrbitalRing,
  CornerDecor,
  Content,
  StatusPill,
  PillDot,
  HeroNumber,
  HeroGradient,
  Headline,
  Subtext,
  Divider,
  ButtonGroup,
  PrimaryBtn,
  SecondaryBtn,
  MetaBar,
  MetaItem,
  MetaSep,
  AmbientLine,
} from "@/styles/NotFoundStyles";

export default function NotFound() {
  return (
    <Scene>
      <Grain aria-hidden="true" />

      <OrbitalRing $size={520} $duration="50s" aria-hidden="true" />
      <OrbitalRing $size={740} $duration="80s" $reverse aria-hidden="true" />

      <CornerDecor $pos="tl" aria-hidden="true" />
      <CornerDecor $pos="tr" aria-hidden="true" />
      <CornerDecor $pos="bl" aria-hidden="true" />
      <CornerDecor $pos="br" aria-hidden="true" />
      <AmbientLine $top="22%" $delay="1.6s" aria-hidden="true" />
      <AmbientLine $top="78%" $delay="2.0s" aria-hidden="true" />

      {/* ── Main content ────────────────────────────── */}
      <Content role="main">
        <StatusPill>
          <PillDot />
          Error&ensp;·&ensp;Page Not Found
        </StatusPill>

        <HeroNumber aria-label="404 error">
          404
          <HeroGradient aria-hidden="true">404</HeroGradient>
        </HeroNumber>

        <Headline>
          This page has <span>vanished</span> into the void
        </Headline>

        <Subtext>
          The destination you&apos;re looking for no longer exists or has been
          relocated to a new address. Let us guide you back to where the
          experience continues.
        </Subtext>

        <Divider />

        <ButtonGroup>
          <PrimaryBtn as={Link} href="/">
            ← Return Home
          </PrimaryBtn>
          <SecondaryBtn as={Link} href="/dashboard">
            Open Dashboard →
          </SecondaryBtn>
        </ButtonGroup>

        <MetaBar>
          <MetaItem>
            Status&ensp;<strong>404</strong>
          </MetaItem>
          <MetaSep />
          <MetaItem>
            Protocol&ensp;<strong>HTTPS</strong>
          </MetaItem>
          <MetaSep />
          <MetaItem>
            Experience&ensp;<strong>NutriAI</strong>
          </MetaItem>
        </MetaBar>
      </Content>
    </Scene>
  );
}
