import { FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FooterShell, Grid, Brand, Title, Text, Links, LinkTitle, FooterLink, Bottom } from './styles';

export function Footer() {
  return (
    <FooterShell>
      <div className="container">
        <Grid>
          <Brand>
            <Title>NutriAI</Title>
            <Text>
              AI coaching, Arabic-first food recognition, and premium analytics for a healthier MENA.
            </Text>
          </Brand>

          <Links>
            <LinkTitle>Product</LinkTitle>
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
            <FooterLink href="/dashboard">Dashboard</FooterLink>
          </Links>

          <Links>
            <LinkTitle>Follow</LinkTitle>
            <FooterLink href="https://instagram.com" target="_blank" rel="noreferrer">
              <FiInstagram /> Instagram
            </FooterLink>
            <FooterLink href="https://x.com" target="_blank" rel="noreferrer">
              <FiTwitter /> X
            </FooterLink>
            <FooterLink href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </FooterLink>
          </Links>
        </Grid>

        <Bottom>
          <Text>© 2026 NutriAI. Built for performance, clarity, and long-term consistency.</Text>
          <Text>Privacy-first nutrition intelligence for the region.</Text>
        </Bottom>
      </div>
    </FooterShell>
  );
}

