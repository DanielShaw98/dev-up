import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServerNavbar from "./components/serverNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevUp",
  description: "Developer & Founder Collaboration Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServerNavbar />
        {children}
      </body>
    </html>
  );
}
