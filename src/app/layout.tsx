import "./globals.css";
import { Tiro_Bangla } from "next/font/google";
import { Providers } from "./Providers";

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali", "latin"],
  weight: ["400"], // Tiro Bangla supports 400
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-tiro-bangla",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={tiroBangla.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
