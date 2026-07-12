"use client";

import * as React from "react";
import { menuItems, bottomItems } from "@/data/DashBoardItems";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  SidebarWrapper,
  BrandContainer,
  LogoLink,
  LogoMark,
  LogoText,
  LogoAccent,
  UserCard,
  UserInfo,
  Avatar,
  UserDetails,
  UserName,
  UserBadge,
  BadgeDot,
  NavSection,
  NavItem,
  NavLink,
  NavIcon,
  FooterSection,
  FooterLink,
  FooterIcon,
} from "./sidebar-styles";
import useUserStore from "@/store/User.Store";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { user } = useUserStore();

  return (
    <Sidebar {...props} className="border-r border-white/5">
      <SidebarWrapper>
        <SidebarHeader>
          <BrandContainer>
            <LogoLink href="/">
              <LogoMark>
                <Image width={50} height={50} src="/LogoLeaf.ico" alt="Logo" />
              </LogoMark>

              <LogoText>
                Nutri<LogoAccent>AI</LogoAccent>
              </LogoText>
            </LogoLink>
          </BrandContainer>

          <UserCard>
            <UserInfo>
              <Avatar>{user?.firstName?.[0]?.toUpperCase() || ""}{user?.lastName?.[0]?.toUpperCase() || ""}</Avatar>
              <UserDetails>
                <UserName>
                  {user?.firstName} {user?.lastName}
                </UserName>
                <UserBadge>
                  <BadgeDot />
                  Pro Member
                </UserBadge>
              </UserDetails>
            </UserInfo>
          </UserCard>
        </SidebarHeader>

        <SidebarContent>
          <NavSection>
            {menuItems.map((item) => {
              const isActive = item.href === pathname;
              return (
                <NavItem key={item.title} $active={isActive}>
                  <NavLink href={item.href} $active={isActive}>
                    <NavIcon $active={isActive}>
                      <item.icon className="size-5" />
                    </NavIcon>
                    <span>{item.title}</span>
                  </NavLink>
                </NavItem>
              );
            })}
          </NavSection>
        </SidebarContent>

        <SidebarFooter>
          <FooterSection>
            {bottomItems.map((item) => {
              const isHighlight = item.title === "Upgrade Plan";
              return (
                <FooterLink
                  key={item.title}
                  href={item.href}
                  $highlight={isHighlight}
                >
                  <FooterIcon $highlight={isHighlight}>
                    <item.icon className="size-5" />
                  </FooterIcon>
                  <span>{item.title}</span>
                </FooterLink>
              );
            })}
          </FooterSection>
        </SidebarFooter>
      </SidebarWrapper>
    </Sidebar>
  );
}
