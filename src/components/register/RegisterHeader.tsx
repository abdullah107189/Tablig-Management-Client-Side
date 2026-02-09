// app/auth/register/components/RegisterHeader.tsx

import { MousePointerSquareDashed } from "lucide-react";

export default function RegisterHeader() {
  return (
    <div className="text-center mb-8">
      {/* Logo */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mb-4">
        <MousePointerSquareDashed className="h-8 w-8 text-white" />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        তাবলীগ সিএমএস - নিবন্ধন
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-md mx-auto">
        আপনার অ্যাকাউন্ট তৈরি করুন এবং মসজিদ ব্যবস্থাপনা শুরু করুন
      </p>
    </div>
  );
}
