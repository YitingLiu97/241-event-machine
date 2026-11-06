import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "241 Event Studio",
  description: "A private workspace for gatherings, creative ideas and paid partnerships.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
