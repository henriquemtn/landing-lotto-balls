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
          <a href="https://drive.google.com/drive/folders/15cq_8Z7ymDP9GwFk5oV7AWZYQbBrOgJ8" target="_blank" rel="noopener noreferrer">
            <button className="border border-white px-4 py-2 flex items-center justify-center text-white bg-transparent rounded-md">
              <IoLogoAndroid size={24} className="mr-2" />
              Download Beta
            </button>
          </a>
        </div>
      </main>
    </>
  );
}
