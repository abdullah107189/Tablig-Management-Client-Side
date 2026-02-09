// app/auth/register/components/RegisterForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema, type RegisterFormData } from "./validationSchema";

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

export default function RegisterForm({
  onSubmit,
  isLoading = false,
  error,
}: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const {
    formState: { isValid, isSubmitting },
  } = form;

  // Password strength indicator
  const password = form.watch("password");
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[a-zA-Z]/.test(pass)) strength++;
    return strength;
  };
  const passwordStrength = getPasswordStrength(password);

  const strengthColor = {
    0: "bg-gray-200",
    1: "bg-orange-500",
    2: "bg-green-500",
  }[passwordStrength as 0 | 1 | 2];

  const strengthText = {
    0: "খালি",
    1: "দুর্বল",
    2: "শক্তিশালী",
  }[passwordStrength as 0 | 1 | 2];
  return (
    <div className="space-y-6">
      {/* Error Alert */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  পূর্ণ নাম *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="আপনার পূর্ণ নাম"
                    disabled={isLoading}
                    className="h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  ইমেইল (ঐচ্ছিক)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                    disabled={isLoading}
                    className="h-12"
                  />
                </FormControl>
                <p className="text-sm text-gray-500 mt-1">
                  লগইনের জন্য ইমেইল অথবা ফোন নম্বর ব্যবহার করতে পারবেন
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  মোবাইল নম্বর *
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="০১XXXXXXXXX"
                    disabled={isLoading}
                    className="h-12"
                  />
                </FormControl>
                <p className="text-sm text-gray-500 mt-1">
                  ১১ ডিজিটের বাংলাদেশী মোবাইল নম্বর দিন
                </p>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  পাসওয়ার্ড *
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="কমপক্ষে ৬ অক্ষর"
                      disabled={isLoading}
                      className="h-12 pr-12"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-12 px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>

                {/* Password Strength Indicator */}
                {password && (
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">পাসওয়ার্ড শক্তি:</span>
                      <span
                        className={`font-medium ${
                          passwordStrength >= 4
                            ? "text-green-600"
                            : passwordStrength >= 3
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {strengthText}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${strengthColor} transition-all duration-300`}
                        style={{ width: `${(passwordStrength / 3) * 100}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="flex items-center gap-2">
                        <CheckCircle
                          className={`h-4 w-4 ${
                            password.length >= 6
                              ? "text-green-500"
                              : "text-gray-300"
                          }`}
                        />
                        কমপক্ষে ৬ অক্ষর
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle
                          className={`h-4 w-4 ${
                            /[a-zA-Z]/.test(password)
                              ? "text-green-500"
                              : "text-gray-300"
                          }`}
                        />
                        অন্তত একটি অক্ষর (A-Z)
                      </p>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${strengthColor} transition-all duration-300`}
                        style={{ width: `${(passwordStrength / 2) * 100}%` }}
                      />
                    </div>
                  </div>
                )}

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  পাসওয়ার্ড নিশ্চিত করুন *
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="পুনরায় পাসওয়ার্ড লিখুন"
                      disabled={isLoading}
                      className="h-12 pr-12"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-12 px-3"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Terms and Conditions */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                আমি{" "}
                <a
                  href="/terms"
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  সেবার শর্তাবলী
                </a>{" "}
                এবং{" "}
                <a
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  গোপনীয়তা নীতি
                </a>{" "}
                পড়েছি এবং সম্মত
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!isValid || isSubmitting || isLoading}
            className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            size="lg"
          >
            {isLoading || isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                রেজিস্ট্রেশন হচ্ছে...
              </>
            ) : (
              "অ্যাকাউন্ট তৈরি করুন"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
