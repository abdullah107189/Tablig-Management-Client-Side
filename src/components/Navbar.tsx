"use client";

import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logoutThunk } from "@/store/slices/authThunks";

export default function Navbar() {
  const { user } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex justify-between">
        <Link href="/" className="font-semibold">
          তাবলিগ ম্যানেজমেন্ট
        </Link>

        {!user ? (
          <div className="flex gap-3">
            <Link href="/auth/login">লগইন</Link>
            <Link href="/auth/register">রেজিস্টার</Link>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link href="/dashboard">ড্যাশবোর্ড</Link>
            <button onClick={() => dispatch(logoutThunk())}>লগআউট</button>
          </div>
        )}
      </div>
    </div>
  );
}
