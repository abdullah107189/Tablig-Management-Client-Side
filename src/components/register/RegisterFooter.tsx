// app/auth/register/components/RegisterFooter.tsx
import Link from 'next/link'

export default function RegisterFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <>
      {/* Login Link */}
      <div className="text-center mt-8 pt-6 border-t">
        <p className="text-gray-600">
          ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
          <Link 
            href="/auth/login" 
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            লগইন করুন
          </Link>
        </p>
      </div>
      
      {/* SEO Metadata (Hidden for screen readers) */}
      <div className="sr-only" aria-hidden="true">
        <h2>তাবলীগ সিএমএস রেজিস্ট্রেশন পেজ</h2>
        <p>মসজিদ ব্যবস্থাপনা সফটওয়্যার - সম্প্রদায় পরিচালনা সিস্টেম</p>
        <p>বাংলাদেশের মসজিদগুলোর জন্য ডিজিটাল সমাধান</p>
        <p>রেজিস্ট্রেশন ফ্রি - কোনো লুকানো খরচ নেই</p>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          © {currentYear} তাবলীগ সিএমএস. সকল স্বত্ব সংরক্ষিত.
        </p>
      </div>
    </>
  )
}