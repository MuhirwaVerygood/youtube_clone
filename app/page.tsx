import Image from "next/image";
import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
  <div className="w-full h-screen flex">
<MainLayout>
  <Sidebar />
 <div className="w-full">
 <Header />
 <Main />
 </div>
</MainLayout>
  </div>
  );
}
