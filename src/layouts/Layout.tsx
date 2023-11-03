"use client";
import Header from "@/layouts/Header";
import "../app/globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-6 text-sm">
      <div className="bg-white col-span-1 min-h-screen">
        <Navbar />
      </div>
      <div className="col-span-5">
        <div className="flex bg-white h-14 mx-5 mt-3 justify-end items-center rounded-md">
          <Header />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
