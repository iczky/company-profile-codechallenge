import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/hooks/RandomUserProvide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Govtech Edu Indonesia",
  description: "Govtech Company Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background-primary text-white`}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
