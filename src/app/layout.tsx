import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

// Custom font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO metadata
export const metadata: Metadata = {
  title: "Ankit Maurya - Software Developer Portfolio",
  description: "Modern & Minimalist Portfolio showcasing Next.js, TypeScript, and Tailwind CSS expertise",
  keywords: ["Software Developer", "Next.js", "TypeScript", "React", "Portfolio"],
  authors: [{ name: "Ankit Maurya" }],
  creator: "Ankit Maurya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scrollbar-thumb-[var(--scrollbar-thumb)] scrollbar-thumb-rounded-xl scrollbar-track-transparent"
    >
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
      >
        {/* Theme provider for dark/light mode */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />          
          <main className="h-full overflow-y-scroll">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
