// app/page.tsx - Bangla Hero Section
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Users,
  CalendarDays,
  BarChart3,
  Shield,
  Globe,
  ArrowRight,
  BookOpen,
  Target,
  UsersRound,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

const features = [
  {
    icon: Home,
    title: "বহু মসজিদ ব্যবস্থাপনা",
    description: "একাধিক মসজিদের তথ্য সম্পূর্ণ আলাদাভাবে পরিচালনা করুন",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "সাথী ব্যবস্থাপনা",
    description: "বিভাগ ভিত্তিক সংগঠনে সম্প্রদায়ের সদস্যদের ট্র্যাক করুন",
    color: "bg-emerald-500",
  },
  {
    icon: CalendarDays,
    title: "দৈনিক তালীম ও মাশওয়ারা",
    description: "দৈনিক কার্যক্রম, উপস্থিতি এবং দায়িত্ব রেকর্ড করুন",
    color: "bg-purple-500",
  },
  {
    icon: Globe,
    title: "খুরূজ ট্র্যাকিং",
    description: "স্থানীয়, সাপ্তাহিক এবং দূরবর্তী খুরূজ প্রোগ্রাম মনিটর করুন",
    color: "bg-amber-500",
  },
  {
    icon: BarChart3,
    title: "বিশ্লেষণ ও প্রতিবেদন",
    description: "বিশদ প্রতিবেদন সরঞ্জাম দিয়ে অন্তর্দৃষ্টি তৈরি করুন",
    color: "bg-indigo-500",
  },
  {
    icon: Shield,
    title: "ভূমিকা ভিত্তিক অ্যাক্সেস",
    description: "মসজিদ_অ্যাডমিন, সম্পাদক, দর্শক ভূমিকা সহ নিরাপদ অ্যাক্সেস",
    color: "bg-red-500",
  },
];

const testimonials = [
  {
    name: "আবদুল্লাহ রহমান",
    role: "মসজিদ প্রশাসক",
    content:
      "এই সিস্টেম আমাদের সম্প্রদায়ের কার্যক্রম পরিচালনার পদ্ধতি বদলে দিয়েছে।",
    mosque: "বাইতুল মোকাররম মসজিদ",
  },
  {
    name: "মোহাম্মদ আলী",
    role: "সম্প্রদায় নেতা",
    content: "বহু-মসজিদ সমর্থন এবং ভূমিকা ব্যবস্থাপনা অসাধারণ।",
    mosque: "ইসলামিক সেন্টার ঢাকা",
  },
  {
    name: "ইউসুফ ইসলাম",
    role: "তাবলীগ কর্মী",
    content: "অবশেষে, আমাদের প্রয়োজন মাফিক একটি ডিজিটাল সমাধান।",
    mosque: "নর্থ সাউথ মসজিদ",
  },
];

const statistics = [
  { value: "৫০০+", label: "সক্রিয় মসজিদ" },
  { value: "১০,০০০+", label: "নিবন্ধিত সাথী" },
  { value: "২৫,০০০+", label: "মাসিক তালীম" },
  { value: "৯৯%", label: "সন্তুষ্টি হার" },
];

const howItWorks = [
  {
    step: "১",
    title: "নিবন্ধন করুন",
    description: "মসজিদ অথবা ব্যক্তিগত অ্যাকাউন্ট তৈরি করুন",
    icon: BookOpen,
  },
  {
    step: "২",
    title: "সাথী যুক্ত করুন",
    description: "আপনার সম্প্রদায়ের সদস্যদের সিস্টেমে যুক্ত করুন",
    icon: UsersRound,
  },
  {
    step: "৩",
    title: "কার্যক্রম রেকর্ড করুন",
    description: "দৈনিক তালীম, খুরূজ এবং অন্যান্য কার্যক্রম লগ করুন",
    icon: CalendarDays,
  },
  {
    step: "৪",
    title: "ট্র্যাক করুন এবং বিশ্লেষণ করুন",
    description: "প্রতিবেদন তৈরি করুন এবং অগ্রগতি মনিটর করুন",
    icon: Target,
  },
];

export default function HomePage() {
  const router = useRouter();
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                🕌 ইসলামিক কমিউনিটি ম্যানেজমেন্ট
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                আপনার মসজিদের{" "}
                <span className="text-blue-600">ডিজিটাল ব্যবস্থাপনা</span>
                <br />
                শুরু করুন আজই
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                তাবলীগ সিএমএস হল একটি সম্পূর্ণ ডিজিটাল প্ল্যাটফর্ম যা মসজিদ ও
                ইসলামিক কমিউনিটির কার্যক্রম সঠিকভাবে ট্র্যাক, সংগঠিত এবং
                বিশ্লেষণ করতে সাহায্য করে।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                  onClick={() => router.push("/auth/register")}
                >
                  বিনামূল্যে শুরু করুন
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg border-2"
                  onClick={() => router.push("/auth/login")}
                >
                  ইতিমধ্যে অ্যাকাউন্ট আছে?
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Feature Showcase */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                কেন আমাদের প্ল্যাটফর্ম বেছে নেবেন?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                আমরা আপনার সমস্ত প্রয়োজন মাথায় রেখে এই সিস্টেম ডিজাইন করেছি
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features?.map((feature, index) => {
                // আইকনটিকে একটি কম্পোনেন্ট ভেরিয়েবল এ নিয়ে নিন
                const IconComponent = feature.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full border-2 hover:border-blue-300 transition-all duration-300 font-tiro">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`${feature?.color} p-3 rounded-lg`}>
                            {/* সরাসরি কম্পোনেন্ট হিসেবে কল করুন */}
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-24 bg-linear-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                কিভাবে কাজ করে?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                মাত্র কয়েকটি সহজ ধাপে আপনার সম্প্রদায়ের ডিজিটাল ব্যবস্থাপনা
                শুরু করুন
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2"></div>
                  )}
                  <Card className="bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                        {step.step}
                      </div>
                      <div
                        className={`p-3 rounded-lg inline-flex mb-4 bg-blue-50`}
                      >
                        <step.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                আমাদের ব্যবহারকারীদের কথা
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                দেশব্যাপী শতাধিক মসজিদ আমাদের সিস্টেম ব্যবহার করছে
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 italic">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        {testimonial.mosque}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-linear-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                আপনার মসজিদের ডিজিটাল রূপান্তর আজই শুরু করুন
              </h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                বিনামূল্যে রেজিস্ট্রেশন করুন এবং প্রথম ৩০ দিন ফ্রি ট্রায়াল
                উপভোগ করুন
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
                  onClick={() => router.push("/auth/register")}
                >
                  বিনামূল্যে অ্যাকাউন্ট তৈরি করুন
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                  onClick={() => router.push("/auth/login")}
                >
                  ডেমো দেখুন
                </Button>
              </div>
              <p className="mt-4 text-blue-200 text-sm">
                কোনো ক্রেডিট কার্ড প্রয়োজন নেই • সহায়তা ২৪/৭
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">ত</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">তাবলীগ সিএমএস</h3>
                  <p className="text-gray-400 text-sm">
                    সম্প্রদায় ব্যবস্থাপনা
                  </p>
                </div>
              </div>
              <p className="text-gray-400">
                মসজিদ ও ইসলামিক সম্প্রদায়ের জন্য সম্পূর্ণ ডিজিটাল সমাধান
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">মডিউল</h4>
              <ul className="space-y-2 text-gray-400">
                <li>সাথী ব্যবস্থাপনা</li>
                <li>তালীম ও মাশওয়ারা</li>
                <li>খুরূজ ট্র্যাকিং</li>
                <li>প্রতিবেদন</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">সম্পদ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ডকুমেন্টেশন</li>
                <li>টিউটোরিয়াল</li>
                <li>সাপোর্ট</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">যোগাযোগ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>ইমেইল: support@tablighcms.com</li>
                <li>ফোন: +৮৮০ ১৭০০-১২৩৪৫৬</li>
                <li>ঠিকানা: ঢাকা, বাংলাদেশ</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© ২০২৪ তাবলীগ সিএমএস। সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
