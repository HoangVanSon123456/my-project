"use client";
import Header from "@/layouts/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import ToastNotification from "@/components/ToastNotification";
import { lazy } from "react";

const Layout = lazy(() => import("@/layouts/Layout"));

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //   <html lang="en">
    //   <body className={inter.className}>
    //     <div className="grid grid-cols-6">
    //       <div className="bg-white col-span-1 min-h-screen">
    //         <Navbar />
    //       </div>
    //       <div className="col-span-5">
    //         <div className="flex bg-white h-14 mx-5 mt-3 justify-end items-center rounded-md">
    //           <Header />
    //         </div>
    //         {children}
    //         <Footer />
    //       </div>
    //     </div>
    //   </body>
    // </html>
    <Layout>
      {children} <ToastNotification />
    </Layout>
  );
}
