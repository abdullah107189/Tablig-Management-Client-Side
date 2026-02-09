import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold">মসজিদ ব্যবস্থাপনা সহজ করুন</h1>

        <p className="mt-3 text-gray-600 max-w-2xl">
          মসজিদের জন্য আবেদন করুন, সদস্য, রিপোর্ট এবং দায়িত্ব এক জায়গায় ম্যানেজ
          করুন।
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#apply" className="bg-black text-white px-5 py-2 rounded">
            মসজিদ আবেদন করুন
          </a>
          <a href="/auth/login" className="border px-5 py-2 rounded">
            লগইন
          </a>
        </div>
      </main>
    </div>
  );
}
