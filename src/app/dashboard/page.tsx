"use client";

import Navbar from "@/components/Navbar";
import {useAppSelector} from "@/store/hooks";
import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function DashboardPage() {
  const {user} = useAppSelector((s) => s.auth);
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if (!user) router.replace(`/${locale}/auth/login`);
  }, [user, router, locale]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            You are logged in.
          </p>
        </div>
      </main>
    </div>
  );
}
