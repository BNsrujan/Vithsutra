
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/Nav";
import Footer from "@/components/homepage/Footer";
import { ThemeProvider } from "@/components/theme-provider"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vithsutra",
  description: "Vithsutra private limited",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="logo/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"/>
        <link rel="shortcut icon" href="logo/favicon.ico"  sizes="48x48" />
        
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="logo/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Vithsutra" />
        <link rel="manifest" href="logo/site.webmanifest" />
        {/* <link
          rel="icon"
          type="image/png"
          href="logo/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="logo/favicon.svg" />
        <link rel="shortcut icon" href="logo/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="logo/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Vithsutra" />
        <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-company-white flex flex-col justify-center dark:text-white  text-company-black`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        
         <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
