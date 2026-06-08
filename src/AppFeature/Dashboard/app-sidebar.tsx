"use client";

import * as React from "react";
import {
  Home,
  Utensils,
  Dumbbell,
  LineChart,
  Users,
  User,
  Calendar,
  Crown,
  ArrowLeft,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { theme } from "@/styles/theme";
import Link from "next/link";
import Image from "next/image";
import { Brand, Mark } from "../shared/Navbar/styles";
import { SpanItalic } from "../features/landing-page/Hero/styles";

const menuItems = [
  { title: "Overview", icon: Home, href: "/dashboard", active: true },
  { title: "Food Log", icon: Utensils, href: "/dashboard/food-log" },
  { title: "Workouts", icon: Dumbbell, href: "/dashboard/workouts" },
  { title: "Progress", icon: LineChart, href: "/dashboard/progress" },
  { title: "Community", icon: Users, href: "/dashboard/community" },
  { title: "Profile", icon: User, href: "/dashboard/profile" },
  { title: "Book Coach", icon: Calendar, href: "/dashboard/book-coach" },
];

const bottomItems = [
  { title: "Upgrade Plan", icon: Crown, href: "/dashboard/upgrade" },
  { title: "Back to Home", icon: ArrowLeft, href: "/" },
];

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="border-r  border-[#7A90B3]/20 ">
      <div style={{ backgroundColor: theme.colors.bg2 }} className="h-full">
        <SidebarHeader>
          <Brand href="/" className="border-b border-[#7A90B3]/20 p-3 ">
            <Mark>
              <Image
                width={90}
                height={90}
                src="/LogoLeaf.ico"
                alt="logo leaf"
              />
            </Mark>
            <h1 className="text-white">
              Nutri<SpanItalic>AI</SpanItalic>
            </h1>
          </Brand>
          <div className="rounded-2xl border border-slate-700 bg-[#0b1830] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-cyan-400 to-violet-500 text-lg font-bold text-white">
                SJ
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-white">Sarah Johnson</h3>

                <p className="text-sm text-slate-400">Pro Member ☀️</p>
              </div>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`h-10 w-50 rounded-2xl text-base transition-colors ${
                    item.active
                      ? "bg-[#00A878]/30 hover:bg-[#00A878]/50"
                      : "text-slate-400 hover:bg-[#7A90B3]/20 hover:text-white"
                  }`}
                >
                  <Link
                    href={item.href}
                    style={{
                      color: item.active ? "white" : theme.colors.textSecondary,
                      margin: "7px",
                    }}
                  >
                    <item.icon className="size-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t border-[#7A90B3]/20">
          <SidebarMenu>
            {bottomItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className="h-10 rounded-2xl text-base hover:bg-[#7A90B3]/30"
                >
                  <Link
                    href={item.href}
                    style={{
                      color: theme.colors.textSecondary,
                    }}
                  >
                    <item.icon
                      className={`size-5 ${
                        item.title === "Upgrade Plan"
                          ? "text-[#F59E0B]"
                          : "text-[#7A90B3]"
                      }`}
                    />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
