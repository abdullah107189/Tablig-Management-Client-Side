"use client";

import Navbar from "@/components/Navbar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginThunk } from "@/store/slices/authThunks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const { status, error, user } = useAppSelector((s) => s.auth);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await dispatch(loginThunk({ email, password }));
    if (loginThunk.fulfilled.match(res)) {
       router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen font-tiro">
      <Navbar />
      <main className="mx-auto max-w-md px-4 py-10">
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold">লগইন করুন</h2>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-medium">ইমেইল ঠিকানা</label>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="আপনার ইমেইল দিন"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">পাসওয়ার্ড</label>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="পাসওয়ার্ড দিন"
                required
              />
            </div>

            {error && <p className="text-sm text-red-600">{String(error)}</p>}

            <button
              disabled={status === "loading"}
              className="w-full rounded-xl bg-black text-white px-4 py-2 text-sm disabled:opacity-60 transition-all font-medium"
            >
              {status === "loading" ? "অপেক্ষা করুন..." : "লগইন"}
            </button>

            {user && (
              <p className="text-xs text-center text-gray-500 mt-2">
                লগইন করা আছে: {user.email}
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}