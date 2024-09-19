"use client";
import MainLayout from "./components/layout/MainLayout";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Main from "./components/Main";
import { Stack } from "@chakra-ui/react";
import { fetchAllData } from "@/utils/fetchData";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    fetchAllData()
  },[])

  return (
    <MainLayout>
      <Sidebar />
       <Stack className="w-[88%]">
       <Header />
       <Main />
       </Stack>
    </MainLayout>
  );
}
