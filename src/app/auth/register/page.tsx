// app/auth/register/page.tsx
import type { Metadata } from "next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RegisterHeader from "@/components/register/RegisterHeader";
import RegisterFooter from "@/components/register/RegisterFooter";
import RegisterFormWrapper from "@/components/register/RegisterFormWrapper";

// SEO Metadata
export const metadata: Metadata = {
  title: "নিবন্ধন করুন - তাবলীগ সিএমএস | মসজিদ ব্যবস্থাপনা সফটওয়্যার",
  description:
    "তাবলীগ সিএমএস-এ বিনামূল্যে রেজিস্ট্রেশন করুন। বাংলাদেশের মসজিদগুলোর জন্য উন্নত ডিজিটাল ব্যবস্থাপনা সমাধান।",
  keywords: [
    "তাবলীগ সিএমএস রেজিস্ট্রেশন",
    "মসজিদ ব্যবস্থাপনা সফটওয়্যার",
    "ইসলামিক কমিউনিটি ম্যানেজমেন্ট",
    "বাংলাদেশ মসজিদ এপ",
    "তাবলীগ কাজের সফটওয়্যার",
    "মসজিদ রেজিস্ট্রেশন",
    "ইসলামিক অ্যাপ বাংলাদেশ",
  ],
  authors: [{ name: "Tabligh CMS" }],
  openGraph: {
    title: "নিবন্ধন করুন - তাবলীগ সিএমএস",
    description: "মসজিদ ব্যবস্থাপনার জন্য বিনামূল্যে অ্যাকাউন্ট তৈরি করুন",
    type: "website",
    locale: "bn_BD",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 flex flex-col items-center justify-center  ">
      {/* Schema.org Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "তাবলীগ সিএমএস - নিবন্ধন পৃষ্ঠা",
            description:
              "মসজিদ ও ইসলামিক সম্প্রদায় ব্যবস্থাপনার জন্য ডিজিটাল প্ল্যাটফর্মে নিবন্ধন করুন",
            url: "https://tablighcms.com/auth/register",
            potentialAction: {
              "@type": "RegisterAction",
              target: "https://tablighcms.com/api/auth/register",
              description: "নতুন ব্যবহারকারী নিবন্ধন",
            },
          }),
        }}
      />

      {/* Schema.org for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "তাবলীগ সিএমএস",
            description: "মসজিদ ও ইসলামিক সম্প্রদায় ব্যবস্থাপনা সফটওয়্যার",
            url: "https://tablighcms.com",
            logo: "https://tablighcms.com/logo.png",
            sameAs: [
              "https://facebook.com/tablighcms",
              "https://twitter.com/tablighcms",
            ],
          }),
        }}
      />

      <div className="w-full">
        <Card className=" ">
          <CardHeader>
            <RegisterHeader />
          </CardHeader>

          <CardContent>
            {/* Now using client wrapper component */}
            <RegisterFormWrapper />

            <RegisterFooter />
          </CardContent>
        </Card>
      </div>

      {/* Hidden SEO content for better indexing */}
      <div className="sr-only">
        <h1>তাবলীগ সিএমএস নিবন্ধন</h1>
        <h2>মসজিদ ব্যবস্থাপনা সফটওয়্যার বাংলাদেশ</h2>
        <p>
          তাবলীগ সিএমএস হল বাংলাদেশের মসজিদ ও ইসলামিক সম্প্রদায়ের জন্য
          বিশেষভাবে ডিজাইনকৃত একটি ডিজিটাল ব্যবস্থাপনা প্ল্যাটফর্ম।
        </p>
        <p>
          এই প্ল্যাটফর্মে আপনি সহজেই আপনার মসজিদের সাথী ব্যবস্থাপনা, দৈনিক তালীম
          রেকর্ড, খুরূজ ট্র্যাকিং এবং বিস্তারিত প্রতিবেদন তৈরি করতে পারবেন।
        </p>
        <p>
          বিনামূল্যে রেজিস্ট্রেশন করে আজই শুরু করুন আপনার মসজিদের ডিজিটাল
          রূপান্তর।
        </p>
        <ul>
          <li>সাথী ক্যাটাগরি ব্যবস্থাপনা</li>
          <li>দৈনিক উপস্থিতি ট্র্যাকিং</li>
          <li>খুরূজ প্রোগ্রাম ম্যানেজমেন্ট</li>
          <li>বিস্তারিত বিশ্লেষণ ও প্রতিবেদন</li>
          <li>বহু-মসজিদ সমর্থন</li>
          <li>ভূমিকা-ভিত্তিক অ্যাক্সেস কন্ট্রোল</li>
        </ul>
      </div>
    </div>
  );
}
