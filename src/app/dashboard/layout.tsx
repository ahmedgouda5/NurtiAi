import { DashboardShell } from "@/AppFeature/Dashboard/DashboardShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
