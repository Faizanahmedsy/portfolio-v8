import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { cn } from "@/lib/utils";
import NavigationBar from "@/components/modules/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Faizanahmed",
    template: "%s | Faizanahmed-v8",
  },
  description: "V8 Of My Portfolio",
  keywords: ["nextjs", "typescript", "tailwindcss"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-page-gradient relative  antialiased dark:bg-page-gradient",
          poppins.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
