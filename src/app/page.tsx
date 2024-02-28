"use client";

import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { TypeAnimation } from "react-type-animation";
import imageProfil1 from "@/img/imageProfil1.jpg";
import Image from "next/image";

import { MdHome } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { AiFillAlert } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const words = [
    {
      text: "I am",
      className: " ",
    },
    {
      text: "Front End",
      className: "text-teal-500  dark:text-teal-500",
    },
    {
      text: "Developer",
      className: "text-teal-500  dark:text-teal-500",
    },
  ];

  return (
    <WavyBackground>
      <main className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[90%] h-max flex justify-start items-center flex-col gap-4">
          <div className="w-full flex justify-center">
            <Image id="imgHome" className="border-2 rounded-full  w-[170px] h-[170px] object-cover " src={imageProfil1} alt="Image Cover" />
          </div>
          <div className=" text-center">
            <div className="flex items-center gap-1 justify-center">
              <h1 className={`${montserrat.className} font-medium`}>Sastra Pradana</h1>
              <RiVerifiedBadgeFill fill="rgb(39, 155, 208)" size="20" />
              <Link href={"https://github.com/Sastrapradana06"}>
                <VscGithubAlt size="20" />
              </Link>
            </div>
            <TypewriterEffectSmooth words={words} />
            {/* <h1 className="text-[1.5rem]">
              I am{" "}
              <span className="text-[teal] font-semibold" id="font1">
                <TypeAnimation 
                  sequence={["Front End Developer", "Mahasiswa"]}
                  speed={10}
                  repeat={Infinity}
                />
              </span>
            </h1> */}
          </div>
          <div className="w-[300px] h-max flex justify-center items-center gap-[20px]">
            <div className="w-max h-max p-2 rounded-lg border cursor-pointer hover:-translate-y-2 duration-200">
              <Link href={"/"} className="">
                <MdHome size="25" color="teal" />
              </Link>
            </div>
            <div className="w-max h-max p-2 rounded-lg border cursor-pointer hover:-translate-y-2 duration-200">
              <Link href={"/about"} className="">
                <IoPerson size="25" color="teal" />
              </Link>
            </div>
            <div className="w-max h-max p-2 rounded-lg border cursor-pointer hover:-translate-y-2 duration-200">
              <Link href={"/project"} className="">
                <AiFillAlert size="25" color="teal" />
              </Link>
            </div>
            <div className="w-max h-max p-2 rounded-lg border cursor-pointer hover:-translate-y-2 duration-200">
              <Link href={"/blog"} className="">
                <FaBloggerB size="25" color="teal" />
              </Link>
            </div>
            <div className="w-max h-max p-2 rounded-lg border cursor-pointer hover:-translate-y-2 duration-200">
              <Link href={"/contact"} className="">
                <IoIosCall size="25" color="teal" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </WavyBackground>
  );
}
