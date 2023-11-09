"use client";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Navbar from "@/layouts/Navbar";
import { useState } from "react";
import "../app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isNavbar, setIsNavBar] = useState(false);
  return (
    <div className="grid grid-cols-6 text-sm">
      <div className="bg-white col-span-1 min-h-screen">
        <Navbar isNavbar={isNavbar} />
      </div>
      <div className="col-span-5">
        <div className="bg-white h-14 mx-5 mt-3 rounded-md">
          <Header isNavbar={isNavbar} />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
}
