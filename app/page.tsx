"use client"
import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
  <div className="w-full h-screen ">
<MainLayout>
<Header />
<div className="w-full flex">
<Sidebar />
<Main/>
</div>
</MainLayout>
  </div>
  );
}
