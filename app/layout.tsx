import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServerNavbar from "./components/serverNavbar";
import SessionWrapper from "./components/sessionWrapper";
import Footer from "./components/footer";

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
        <SessionWrapper>
          <ServerNavbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
