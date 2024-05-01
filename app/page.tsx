'use client';

import { Button } from "@/components/ui/button";
import { IoLogoAndroid } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex h-[60px] items-center justify-center w-full bg-gradient-to-r from-[#773F01] via-[#FAB300] to-[#773F01] absolute top-0">
        <h1 className="text-white">Early access to game download!</h1>
      </div>
      <main className="flex flex-col w-full h-screen bg-gradient-to-r from-[#12090A] via-[#180502] to-[#12090A]  items-center justify-center">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <Image
            alt="Logo"
            src={require("../public/goldenlotto.png")}
            className="md:w-[50%]"
          />
          <Button variant="outline">
            <IoLogoAndroid size={24} />
            Download Beta
          </Button>
        </div>
      </main>
    </>
  );
}
