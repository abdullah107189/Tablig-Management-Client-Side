/* eslint-disable @typescript-eslint/no-explicit-any */
// app/auth/register/components/RegisterFormWrapper.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "./RegisterForm";
import { type RegisterFormData } from "./validationSchema";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function RegisterFormWrapper() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError("");
    console.log("data", data);
    try {
      // API call to register endpoint
      //   const response = await fetch("/api/auth/register", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   });

      //   const result = await response.json();

      //   if (!response.ok) {
      //     throw new Error(result.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
      //   }

      // Registration successful
      router.push("/auth/login?registered=true");
    } catch (err: any) {
      setError(err.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে। পরে চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" ">
      <RegisterForm
        onSubmit={handleRegister}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
