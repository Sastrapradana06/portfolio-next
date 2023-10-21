'use client'

import Image from "next/image";
import Link from "next/link";
import { blogData } from "./store";
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function BlogView() {

  
  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <div className=" w-full flex flex-col gap-6 items-center lg:flex-row lg:justify-center lg:flex-wrap">
      {blogData.map((data) => {
        return (
          <div className="w-full h-[180px] border flex items-center backdrop-blur-[10px] bg-[#00000031] lg:w-[40%]" key={data.id} data-aos="zoom-in" data-aos-duration="800">
            <div className="w-[30%] h-full p-1" id="img">
              <Image className="h-full w-full border object-cover rounded-md" src={data.image} alt="image cover" width={0} height={0} />
            </div>
            <div className="w-[70%] h-full flex flex-col justify-around p-2">
              <h1 id="font1">{data.title}</h1>
              <p className="text-[.7rem] text-[#b9b5b5]">{data.body}</p>
              <button className="border w-max px-4 text-left text-[.7rem] rounded-lg" id="btn_detail">
                <Link href={`/blog/${data.id}`}>Detail</Link>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
}
