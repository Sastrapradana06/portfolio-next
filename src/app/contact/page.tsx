import AppShell from "@/components/AppShell/AppShell";
import Navbar from "@/components/navbar/Navbar";
import { FaLocationArrow, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import Link from "next/link";

export default function ContactPage() {
  const dataNavbar = {
    pervLink: "/blog",
    nextLink: "/",
    pervName: "Blog",
    nextName: "Home",
  };
  return (
    <AppShell>
      <Navbar dataNavbar={dataNavbar} />
      <div className="w-full h-[90vh] mt-16 flex flex-col items-center justify-center ">
        <div className="" id="title">
          <h1 className="text-[1.2rem] lg:text-[1.4rem]" id="font1">
            Contact Me
          </h1>
        </div>
        <div className=" w-[500px] h-max p-2 flex flex-col items-center justify-center gap-4 ">
          <div className="w-[700px] h-[300px]   rounded-lg flex flex-col p-2 lg:w-[50%]">
            <div className=" h-full flex items-center gap-2 pl-4">
              <FaSearchLocation size="30" fill="black" />
              <p className="" id="color-gray">
                Medan, Indonesia
              </p>
            </div>
            <div className=" h-full flex items-center gap-2 pl-4">
              <FaPhoneAlt size="30" fill="black" />
              <p className="" id="color-gray">
                +6283870915417
              </p>
            </div>
            <div className=" h-full flex items-center gap-2 pl-4">
              <MdEmail size="30" fill="black" />
              <p className="" id="color-gray">
                sastrapradana535@gmail.com
              </p>
            </div>
            <div className=" h-full flex items-center gap-6 justify-center">
              <Link href={"https://instagram.com/sastrapradn?igshid=NTc4MTIwNjQ2YQ=="} className="border p-1 rounded-full" id="sosmed">
                <AiFillInstagram size="30" fill="white" />
              </Link>
              <Link href={"https://www.facebook.com/sastra.pradana.96?mibextid=ZbWKwL"} className="border p-1 rounded-full" id="sosmed">
                <AiFillFacebook size="30" fill="white" />
              </Link>
              <Link href={"https://www.tiktok.com/@sstra_pradana?_t=8gOkq6RD6I5&_r=1"} className="border p-1 rounded-full" id="sosmed">
                <BiLogoTiktok size="30" fill="white" />
              </Link>
              <Link href={"/"} className="border p-1 rounded-full" id="sosmed">
                <AiFillLinkedin size="30" fill="white" />
              </Link>
            </div>
          </div>
          {/* <div className="w-full h-[100px] border "></div> */}
        </div>
      </div>
    </AppShell>
  );
}
