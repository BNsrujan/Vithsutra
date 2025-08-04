import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/presentation/components/navbar.section";
import Footer from "@/presentation/components/footer.section";
import { Inter } from "next/font/google";
import { ContextMenu, ContextMenuTrigger } from "@radix-ui/react-context-menu";
// if you use the variable option when importing a font in your layout, then you must reference the font via var(--your-font-variable)
// in your global CSS or Tailwind config — otherwise, the font will never actually be applied.

const inter = Inter({
  // variable:"--font-inter",
  subsets: ["latin"], // only load the basic English alphabet characters
});

export const metadata: Metadata = {
  title: "Vithsutra",
  description: "Vithsutra - Your Technology Partner",
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans antialiased min-h-screen bg-company-white`}
      >
        <main className="flex-grow">
          <Navbar />
          <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
          </ContextMenu>
          <Footer />
        </main>
      </body>
    </html>
  );
}
