import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BookTube",
  description: "Watch classic book reviews, BookBites, and BookTube essays.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-[var(--page-bg)] font-sans text-[var(--page-text)]">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("booktube-theme")==="light")document.documentElement.classList.add("theme-light")}catch(e){}`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
