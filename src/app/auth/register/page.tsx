"use client";

import Navbar from "@/components/Navbar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { registerThunk } from "@/store/slices/authThunks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((s) => s.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await dispatch(
      registerThunk({ name, email, password, phone: phone || undefined }),
    );
    if (registerThunk.fulfilled.match(res)) {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen font-tiro">
      <Navbar />
      <main className="mx-auto max-w-md px-4 py-10">
        <div className="rounded-2xl border p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold">নতুন অ্যাকাউন্ট তৈরি করুন</h2>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-medium">পুরো নাম</label>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                value={name}
                placeholder="আপনার নাম লিখুন"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">ইমেইল ঠিকানা</label>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                value={email}
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">পাসওয়ার্ড</label>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                value={password}
                placeholder="কমপক্ষে ৬ সংখ্যার পাসওয়ার্ড"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium">ফোন নম্বর (ঐচ্ছিক)</label>
              <input
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
                value={phone}
                placeholder="আপনার ফোন নম্বর"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {error && <p className="text-sm text-red-600">{String(error)}</p>}

            <button
              disabled={status === "loading"}
              className="w-full rounded-xl bg-black text-white px-4 py-2 text-sm disabled:opacity-60 transition-all font-medium"
            >
              {status === "loading" ? "অপেক্ষা করুন..." : "নিবন্ধন করুন"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
