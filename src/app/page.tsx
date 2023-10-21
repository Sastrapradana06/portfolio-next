"use client"

import Link from "next/link";
import {RiVerifiedBadgeFill } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import imageProfil1 from '@/img/imageProfil1.jpg'
import Image from "next/image";

export default function Home() {
  const listLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Project",
      link: "/project",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

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
        <div className=" flex justify-center gap-3 items-center w-full h-max">
          {listLink.map((list, i) => {
            return (
              <div className="border-2 py-1 px-3 rounded-xl border-[white] text-[.8rem]" key={i} id="link">
                <Link href={list.link}>{list.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
