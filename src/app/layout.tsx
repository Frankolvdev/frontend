import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
