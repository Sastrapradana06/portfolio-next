import Navbar from "@/components/navbar/Navbar";
import ProjectView from "./ProjectView";
import AppShell from "@/components/AppShell/AppShell";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function ProjectPage() {
  const dataNavbar = {
    pervLink: "/about",
    nextLink: "/blog",
    pervName: "About",
    nextName: "Blog",
  };

  return (
    <WavyBackground>
      <AppShell>
        <Navbar dataNavbar={dataNavbar} />
        <div className="w-[90%] h-max flex flex-col gap-3 items-center mt-16">
          <div className="flex items-center gap-1" id="title">
            <h1 className="text-[1.2rem] lg:text-[1.3rem]" id="font1">
              My Project
            </h1>
          </div>
          <ProjectView />
        </div>
      </AppShell>
    </WavyBackground>
  );
}
