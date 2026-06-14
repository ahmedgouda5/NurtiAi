"use client";

import { useTranslation } from "react-i18next";
import { FaBell } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { theme } from "@/styles/theme";
import { AppSidebar } from "@/AppFeature/Dashboard/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <SidebarProvider>
        <AppSidebar side={isArabic ? "right" : "left"} />
        <SidebarInset style={{ backgroundColor: theme.colors.bg }}>
          <header
            className="flex h-16 shrink-0 items-center justify-between px-4"
            style={{
              backgroundColor: theme.colors.bg2,
              borderBottom: `1px solid ${theme.colors.border}`,
            }}
          >
            <div className="flex items-center gap-2">
              <SidebarTrigger
                style={{ color: theme.colors.textSecondary }}
                className="hover:bg-transparent focus-visible:ring-0"
              />

              <Separator
                orientation="vertical"
                className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                style={{ backgroundColor: theme.colors.border }}
              />

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink
                      href="#"
                      className="transition-colors hover:text-white"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      NutriAI
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator
                    className="hidden md:block"
                    style={{ color: theme.colors.textSecondary }}
                  />

                  <BreadcrumbItem>
                    <BreadcrumbPage
                      style={{ color: theme.colors.text }}
                      className="font-medium"
                    >
                      AI-Powered Health Platform
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="relative flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: theme.colors.border,
                  backgroundColor: theme.colors.bg3,
                  color: theme.colors.textSecondary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${theme.colors.primary}40`;
                  e.currentTarget.style.color = theme.colors.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border;
                  e.currentTarget.style.color = theme.colors.textSecondary;
                }}
                aria-label="Notifications"
              >
                <FaBell size={15} />
                <span
                  className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold"
                  style={{
                    backgroundColor: theme.colors.coral,
                    color: theme.colors.text,
                    boxShadow: `0 2px 8px ${theme.colors.coral}50`,
                  }}
                >
                  3
                </span>
              </button>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 overflow-hidden p-4">
            <div className="flex-1 overflow-y-auto">{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
