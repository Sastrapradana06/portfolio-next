'use client'

import AppShell from "@/components/AppShell/AppShell";
import Navbar from "@/components/navbar/Navbar";
import { useState, useEffect } from "react";
import { blogData } from "../store";
import DetailBlogView from "./DetailBlogView";

export default function DetailBlog(props: any) {
  const [idBlog, setIdBlog] = useState<number | undefined>(undefined)
  const [detailBlog, setDetailBlog] = useState<object>({})
  const {params} = props

  useEffect(() => {
    const {id} = params
    if(id) {
      setIdBlog(Number(id[0]))
      const filterBlog = blogData.find((item) => {
        return item.id === idBlog
      })
      if(filterBlog) {
        setDetailBlog(filterBlog)
      }
    }
    
  }, [params, idBlog])


  const dataNavbar = {
    pervLink: idBlog === 1 ? '/blog' : (idBlog !== undefined ? `/blog/${idBlog - 1}` : ''),
    nextLink: idBlog === 3 ? '/contact' : (idBlog !== undefined ? `/blog/${idBlog + 1}` : ''),
    pervName: idBlog === 1 ? 'Blog' : 'Perv',
    nextName: idBlog === 3 ? 'Contact' : 'Next',
  }
  
  return (
    <AppShell>
      <Navbar dataNavbar={dataNavbar} />
      <DetailBlogView blog={detailBlog}/>
    </AppShell>
  )
};
