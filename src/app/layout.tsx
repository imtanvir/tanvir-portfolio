import "@/src/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/src/components/navbar";
import { fontSans } from "@/src/config/fonts";
import { siteConfig } from "@/src/config/site";
import { Link } from "@nextui-org/link";
import ToggleButton from "../components/utils/ToggleButton";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleToggleNav = () => {
    // Toggle the navigation menu
  };

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Ga+Maamli&family=Manrope:wght@200..800&family=Meie+Script&family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex">
            <ToggleButton />
            <section className="tanvir lg:flex hidden bg-default-200 from-default-200 lg:w-[7%] md:w-[10%]  overflow-hidden">
              <Navbar />
            </section>
            <section className="lg:w-[94%] md:w-[90%] w-full overflow-hidden">
              {/* <main className="container mx-auto max-w-7xl pt-16 px-6"> */}
              <main className="main-child-holder">{children}</main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">
                    All rights reserved © 2024 {` - `}
                  </span>
                  <p className="text-[#a3e635]">Tanvir</p>
                </Link>
              </footer>
            </section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
