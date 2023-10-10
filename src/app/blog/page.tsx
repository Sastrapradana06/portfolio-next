import AppShell from "@/components/AppShell/AppShell";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import BlogView from "./BlogView";


export default function BlogPage() {
  const dataNavbar = {
    pervLink: '/project',
    nextLink: '/contact',
    pervName: 'Project',
    nextName: 'Contact',
  }
  return (
    <AppShell>
      <Navbar dataNavbar={dataNavbar}/>
      <div className="w-[90%] min-h-[90vh] max-h-max mt-16 flex flex-col items-center gap-4 justify-center mb-4">
        <div className="" id="title">
          <h1 className="text-[1.3rem]" id="font1">Blog Page</h1>
        </div>
        <BlogView />
      </div>
    </AppShell>
  )
};
