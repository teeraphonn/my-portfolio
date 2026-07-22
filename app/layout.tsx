import type { Metadata, Viewport } from "next";
import { Prompt, Poppins, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teeraphon Plianram | Full Stack Developer Portfolio",
  description: "พอร์ตโฟลิโอส่วนตัวของ ธีรพล เปลี่ยนรัมย์ (Teeraphon Plianram) นักศึกษาสาขาวิทยาการคอมพิวเตอร์ และ Full Stack Developer ยินดีต้อนรับสู่พื้นที่แสดงผลงานและทักษะความสามารถ",
  keywords: [
    "Teeraphon Plianram",
    "ธีรพล เปลี่ยนรัมย์",
    "Full Stack Developer",
    "Computer Science",
    "Buriram Rajabhat University",
    "Portfolio",
    "Web Developer Thailand",
    "พอร์ตโฟลิโอ",
  ],
  authors: [{ name: "Teeraphon Plianram", url: "mailto:teeraphon.pli@gmail.com" }],
  openGraph: {
    title: "Teeraphon Plianram | Full Stack Developer Portfolio",
    description: "พอร์ตโฟลิโอส่วนตัวของ ธีรพล เปลี่ยนรัมย์ (Teeraphon Plianram) นักศึกษาสาขาวิทยาการคอมพิวเตอร์ และ Full Stack Developer",
    type: "website",
    locale: "th_TH",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0C" },
  ],
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${poppins.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-[#C1121F] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
