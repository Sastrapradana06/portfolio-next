"use client"

import Link from "next/link";
import {RiVerifiedBadgeFill } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { TypeAnimation } from 'react-type-animation';
import imageProfil1 from '@/img/imageProfil1.jpg'
import Image from "next/image";

import { MdHome } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { AiFillAlert } from "react-icons/ai";
import { FaBloggerB } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

export default function Home() {

  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[90%] h-max flex justify-start items-center flex-col gap-4">
        <div className="w-full flex justify-center">
          <Image 
            id="imgHome"
            className="border-2 rounded-full  w-[170px] h-[170px] object-cover "
            src={imageProfil1}
            alt="Image Cover"
          />
        </div>
        <div className=" text-center">
          <div className="flex items-center gap-1 justify-center">
            <h1 className="text-[1.2rem]">Sastra Pradana</h1>
            <RiVerifiedBadgeFill fill="rgb(39, 155, 208)" size="20"/>
            <Link href={"/"}>
              <VscGithubAlt size="20"/>
            </Link>
          </div>
          <h1 className="text-[1.5rem]">
            I am{" "}
            <span className="text-[teal] font-semibold" id="font1">
              <TypeAnimation 
                sequence={["Front End Developer", "Mahasiswa"]}
                speed={10}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>
        <div className="w-[230px] min-h-max max-h-max rounded-lg flex flex-col">
          <div className="w-[100%] h-[50px]">
            <Link href={'/'} className="w-[100%] flex justify-center items-center p-1 m-auto border-[3px] gap-[10px]">
              <MdHome size="25" color="teal"/>
              <h1>Home</h1>
            </Link>
          </div>
          <div className="w-[100%] h-[50px] flex justify-center items-center p-1 gap-[10px]">
            <Link href={'/about'} className="w-[50%] flex justify-center items-center p-1 m-auto border-[3px] gap-[10px]">
              <IoPerson  size="25" color="teal"/>
              <h1>About</h1>
            </Link>
            <Link href={'/project'} className="w-[50%] flex justify-center items-center p-1 m-auto border-[3px] gap-[10px]">
              <FaBloggerB size="25" color="teal"/>
              <h1>Blog</h1>
            </Link>
          </div>
          <div className="w-[100%] h-[50px] flex justify-center items-center p-1 gap-[10px]">
            <Link href={'/blog'} className="w-[50%] flex justify-center items-center p-1 m-auto border-[3px] gap-[10px]">
              <AiFillAlert size="25" color="teal"/>
              <h1>Project</h1>
            </Link>
            <Link href={'/contact'} className="w-[50%] flex justify-center items-center p-1 m-auto border-[3px] gap-[10px]">
              <IoIosCall size="25" color="teal"/>
              <h1>Contact</h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
