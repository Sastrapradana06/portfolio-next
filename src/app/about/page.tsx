'use client'
import imageProfil2 from '@/img/imageProfil2.png'
import Image from "next/image"
import SkillView from "./SkillView";
import Navbar from "@/components/navbar/Navbar";
import AppShell from "@/components/AppShell/AppShell";
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';


export default function AboutPage() {
  const dataNavbar = {
    pervLink: '/',
    nextLink: '/project',
    pervName: 'Home',
    nextName: 'Project',
  }

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  return (
    <AppShell>
        <Navbar dataNavbar={dataNavbar}/>
        <div className=" w-full h-max flex flex-col gap-4 items-center justify-center lg:flex-row lg:w-[70%] mt-16 lg:mt-28 mb-6">
          <div className=" h-max flex justify-center items-center" data-aos="zoom-in">
              <Image 
                className="border-2 w-[260px]  h-[320px] object-cover rounded-lg animate-pulse lg:h-[400px] lg:w-[280px]"
                src={imageProfil2}
                alt="Image Me"
              />
          </div>
          <div className=" h-max w-[90%]">
            <div className="" id="about_me">
              <div className="flex items-center gap-1" data-aos="fade-down" data-aos-delay="250">
                <span className="w-[35px] border-b h-[13px]"></span>
                <p className="text-[.9rem]" >About me</p>
              </div>
              <div className="border w-full h-max p-2 mt-1 rounded-lg flex items-center backdrop-blur-[5px] bg-[#ffffff11]" data-aos="zoom-in" data-aos-delay="500">
                <p className="text-[.8rem] text-[#dfdada] lg:text-[.9rem]" >Haii, My name is Sastra Pradana from Medan. I am a student with an interest in Front End Development, I enjoy working in a team to come up with creative solutions that can improve the overall user experience</p>
              </div>
            </div>
            <div className="mt-5" id="skill">
              <div className="flex items-center gap-1" data-aos="fade-down" data-aos-delay="750">
                <p className="text-[.9rem]">Skill</p>
                <span className="w-[35px] border-b h-[13px]"></span>
              </div>
              <SkillView aos="zoom-in" delay="1000"/>
            </div>
          </div>
        </div>
    </AppShell>

  )
};
