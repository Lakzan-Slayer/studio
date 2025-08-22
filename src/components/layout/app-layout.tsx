import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "./user-nav";
import { SidebarNav } from "./sidebar-nav";
import { type ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
  pageTitle: string;
};

export function AppLayout({ children, pageTitle }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen">
        <Sidebar collapsible="icon">
          <SidebarNav />
        </Sidebar>
        <SidebarInset>
          <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-xl font-semibold hidden md:block">{pageTitle}</h1>
            <div className="ml-auto">
              <UserNav />
            </div>
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
