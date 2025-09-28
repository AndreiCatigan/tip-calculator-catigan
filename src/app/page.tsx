import Image from "next/image";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-mono bg-[hsl(172, 67%, 45%)] ">
      {/* Logo */}
      <Image
        src="/logo.svg"
        alt="Logo"
        width={80}
        height={40}
        className="mb-10"
      />

      {/* Container */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row max-w-4xl w-full">
        {/* Left Panel */}
        <LeftPanel />

        {/* Right Panel */}
        <RightPanel />
      </div>
    </main>
  );
}
