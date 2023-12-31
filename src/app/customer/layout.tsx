"use client";
import Layout from "@/layouts/Layout";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Quản lý khách hàng</title>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
