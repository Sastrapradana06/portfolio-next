import { WavyBackground } from "@/components/ui/wavy-background";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <WavyBackground>
      <main className="w-full min-h-[100vh] max-h-max">
        <div className="w-[100%] h-max m-auto flex flex-col items-center">{children}</div>
      </main>
    </WavyBackground>
  );
}
