import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

import {
  FooterShell,
  FooterTop,
  Brand,
  Logo,
  LogoText,
  Description,
  Socials,
  SocialLink,
  Column,
  ColumnTitle,
  FooterLink,
  Bottom,
} from "./styles";

export function Footer() {
  return (
    <FooterShell>
      <div className="container">
        <FooterTop>
          <Brand>
            <div className="flex items-center gap-2">
              <Logo>
                <span>✚</span>
              </Logo>
              <LogoText>NutriAI</LogoText>
            </div>

            <Description>
              Your AI-powered health and fitness companion. Available in Arabic
              and English.
            </Description>

            <Socials>
              <SocialLink href="#">
                <FiTwitter />
              </SocialLink>

              <SocialLink href="#">
                <FiInstagram />
              </SocialLink>

              <SocialLink href="#">
                <FaTiktok />
              </SocialLink>

              <SocialLink href="#">
                <FiYoutube />
              </SocialLink>
            </Socials>
          </Brand>

          <Column>
            <ColumnTitle>Product</ColumnTitle>
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
            <FooterLink href="#">Mobile App</FooterLink>
            <FooterLink href="#">API</FooterLink>
          </Column>

          <Column>
            <ColumnTitle>Support</ColumnTitle>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Community</FooterLink>
            <FooterLink href="#">Coaches</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </Column>

          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </Column>
        </FooterTop>

        <Bottom>
          <span>© 2025 NutriAI Inc. All rights reserved.</span>

          <span>Made with ❤️ for healthier lives worldwide</span>
        </Bottom>
      </div>
    </FooterShell>
  );
}
