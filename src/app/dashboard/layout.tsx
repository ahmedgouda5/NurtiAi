"use client";

import { useTranslation } from "react-i18next";
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
            className="flex h-16 shrink-0 items-center gap-2"
            style={{
              backgroundColor: theme.colors.bg2,
              borderBottom: `1px solid ${theme.colors.border}`,
            }}
          >
            <div className="flex items-center gap-2 px-3">
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
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div>{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
