'use client'

import scatterImg from '@/img/scatterImg.png'
import catatankuImg from '@/img/catatankuImg.png'
import komangImg from '@/img/komangImg.jpg'
import dompetku from '@/img/dompetku.png'
import kuychatImg from '@/img/kuychatImg.png'
import portfolioImg from '@/img/portfolioImg.png'
import Image from 'next/image'
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import Link from 'next/link'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function ProjectView() {

  useEffect(() => {
    AOS.init({
      once: true,
    })
  }, [])

  const listProject = [
    {
      img: scatterImg,
      name: 'Scatter.App',
      deskripsi: 'My first project with React JS, emulating the appearance of the Twitter application',
      demo: 'https://scatter-app61.netlify.app/',
      gitHub: 'https://github.com/Sastrapradana06/Scatter-App',
      tech: ['React Js', 'Tailwind']
    },
    {
      img: catatankuImg,
      name: 'Catatanku.App',
      deskripsi: 'Create a website with the aim of storing important records so that they are not lost, and confidential because they are in the form of a website',
      demo: 'https://catatanku-app.netlify.app/',
      gitHub: 'https://github.com/Sastrapradana06/Catatanku-app',
      tech: ['React Js', 'Tailwind', 'Redux']
    },
    {
      img: komangImg,
      name: 'KomangResto.App',
      deskripsi: 'As the name suggests, this website contains menus at a restaurant, with various types of food and drinks',
      demo: 'https://komang-resto.netlify.app/',
      gitHub: 'https://github.com/Sastrapradana06/komang-resto-app2',
      tech: ['React Js', 'Tailwind', 'Zustand']
    },
    {
      img: dompetku,
      name: 'Dompetku.App',
      deskripsi: 'Dompetku is a specially designed financial management platform to assist you in meticulously organizing your expenses and income, providing a clear overview of your financial health.',
      demo: 'https://dompetku66.vercel.app/',
      gitHub: 'https://github.com/Sastrapradana06/Dompetku',
      tech: ['Next Js', 'Zustand', 'Firebase']
    },
    {
      img: portfolioImg,
      name: 'Portfolio.App',
      deskripsi: 'Apart from my personal portfolio, I created this website with the aim of practicing my understanding of next js',
      demo: 'https://portfolio-next.netlify.app/',
      gitHub: 'https://github.com/Sastrapradana06/firebase-auth',
      tech: ['Next Js', 'Tailwind']
    },
  ]

  return (
    <div className="w-full h-max rounded-lg flex flex-wrap flex-col  items-center justify-center gap-6 backdrop-blur-[5px] bg-[#fffdfd17] lg:flex-row  lg:gap-3 p-3 mb-4">
      {listProject.map((data, i) => {
          return (
            <div className="w-[90%] h-[310px] border border-white  bg-[#313030] flex flex-col lg:w-[30%] lg:h-[330px] rounded-xl hover:animate-pulse" key={i} data-aos="zoom-in" data-aos-duration="800">
              <div className="w-full h-[60%] flex items-center justify-center" id="image">
                <Image
                  className='w-[90%] h-[90%] m-auto object-cover rounded-xl border-2'
                  src={data.img}
                  alt='Scatter Img'
                  width={0}
                  height={0}
                />
              </div>
              <div className="" id="title">
                <p className="text-[.8rem] text-center italic">{data.name}</p>
              </div>
              <div className="h-[50%] p-1 flex flex-col justify-around items-center">
                <div className="max-w-[100%] h-[80%] flex  flex-col gap-2  p-1" id="deskripsi">
                  <p className="text-[.7rem] text-[#9d9b9b]">{data.deskripsi}.</p>
                  <div className="flex gap-2 items-center flex-wrap">
                    {data.tech.map((data, i) => {
                      return (
                        <p className='text-[.7rem] border px-2 rounded-lg ' key={i}>{data}</p>
                      )
                    })}
                  </div>
                </div>
                <div className="flex w-[100%] items-center justify-end gap-2" id="linkk">
                  <Link href={data.demo}>
                    <GoLinkExternal size="20"/>
                  </Link>
                  <Link href={data.gitHub}>
                    <FiGithub size="20"/>
                  </Link>
                </div>
              </div>
            </div>
          )
      })}
    </div>
  )
};
