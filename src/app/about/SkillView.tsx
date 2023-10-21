
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { SiTailwindcss, SiCss3, SiJavascript, SiRedux, SiMongodb, SiNextdotjs } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

interface SkillViewProps {
  aos: string,
  delay: string
}



export default function SkillView({ aos, delay }: SkillViewProps){
  const listSkill = [
    {
      name: "HTML",
      icons: <AiFillHtml5 fill="#d05f09" size="30"/>,
    },
    {
      name: "CSS",
      icons: <SiCss3 fill="#2859c3" size="30"/>,

    },
    {
      name: "Tailwind",
      icons: <SiTailwindcss fill="#09a8d0" size="30"/>,

    },
    {
      name: "Javascript",
      icons: <SiJavascript fill="#d7c418" size="30"/>,
    },
    {
      name: "React Js",
      icons: <FaReact fill="#09a8d0" size="30"/>,
    },
    {
      name: "Redux",
      icons: <SiRedux fill="#8a28c3" size="30"/>,

    },
    {
      name: "Next Js",
      icons: <SiNextdotjs fill="white" size="30"/>,
    },
    {
      name: "Node Js",
      icons: <FaNodeJs fill="#227a0a" size="30"/>,
    },
    {
      name: "Mongo Db",
      icons: <SiMongodb fill="#227a0a" size="30"/>,
    },
    {
      name: "GitHub",
      icons: <AiFillGithub fill="white" size="30"/>,
    },
  ];

  return (
    <div className="border mt-1 w-full h-max p-2 rounded-lg flex flex-wrap items-center justify-center gap-4 backdrop-blur-[5px] bg-[#fffdfd17]  " data-aos={aos} data-aos-delay={delay}>
      {listSkill.map((data, i) => {
        return (
          <div className="w-[150px] h-[50px] flex gap-2 justify-center items-center border bg-[#2d2c2c]" key={i}>
            {data.icons}
            <p className="text-[.8rem]">{data.name}</p>
          </div>
        )
      })}
    </div>
  );
}
