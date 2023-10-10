import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Link from "next/link";

type dataProps = {
  pervLink: string;
  nextLink: string;
  pervName: string;
  nextName: string;
};

export default function Navbar({ dataNavbar }: { dataNavbar: dataProps }) {
  const { pervLink, nextLink, pervName, nextName } = dataNavbar;
  return (
    <div className="w-[100%] p-5 flex justify-between items-center text-[.8rem] lg:w-[100%] fixed  z-30 backdrop-blur-[8px] bg-[#f8f8f813]">
      <Link href={pervLink} className="flex gap-1 items-center">
        <GrFormPreviousLink fill="white" size="20" />
        <p>{pervName}</p>
      </Link>
      <Link href={nextLink} className="flex gap-2 items-center">
        <p>{nextName}</p>
        <GrFormNextLink fill="white" size="20" />
      </Link>
    </div>
  );
}
