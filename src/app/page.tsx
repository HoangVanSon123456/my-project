"use client";
import { useEffect } from "react";
import AppTable from "./components/app.table";

export default function Home() {
  const res = fetch("http://localhost:8000/blogs");
  console.log("check res", res);

  useEffect(() => {
    const fetchData = async () => {
      const res = fetch("http://localhost:8000/blogs");
      const data = await (await res).json();
      console.log("check res", data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <AppTable />
      </div>
    </>
  );
}
