// components/layout/sidebar.tsx
"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  Globe,
  House,
  BoxSelectIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLocale } from "@/components/locale-provider";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "nav.dashboard", href: "/" },
  { icon: Users, label: "nav.sathi", href: "/sathi" },
  { icon: CalendarDays, label: "nav.talim", href: "/talim" },
  { icon: BoxSelectIcon, label: "nav.khuruj", href: "/khuruj" },
  { icon: BarChart3, label: "nav.reports", href: "/reports" },
  { icon: Settings, label: "nav.settings", href: "/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { t, isBangla } = useLocale();

  return (
    <aside
      className={cn(
        "flex flex-col border-r bg-background transition-all duration-300",
        collapsed ? "w-20" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <House className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg">{t("app.name")}</h1>
                <p className="text-xs text-muted-foreground">
                  {t("app.tagline")}
                </p>
              </div>
            </div>
          )}
          {collapsed && (
            <div className="mx-auto">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <House className="w-6 h-6 text-white" />
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      </div>

      {/* Mosque Selector */}
      <div className="p-4 border-b">
        <BoxSelectIcon className="w-6 h-6" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3",
                  collapsed && "justify-center px-0",
                )}
                asChild
              >
                <a href={item.href}>
                  <item.icon className="w-6 h-6" />
                  {!collapsed && <span>{t(item.label)}</span>}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3",
                collapsed && "justify-center px-0",
              )}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              {!collapsed && (
                <div className="flex-1 text-left">
                  <p className="font-medium">Abdullah Mohammad</p>
                  <p className="text-xs text-muted-foreground">MOSQUE_ADMIN</p>
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Globe className="mr-2 h-4 w-4" />
              <span>Language: {isBangla ? "বাংলা" : "English"}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
