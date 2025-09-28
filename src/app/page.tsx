"use client"; 

import { useState } from "react";
import Image from "next/image";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function Home() {

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const tipAmount = people > 0 ? (bill * (tip / 100)) / people : 0;
  const totalPerPerson = people > 0 ? bill / people + tipAmount : 0;


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
        <LeftPanel 
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />

        {/* Right Panel */}
        <RightPanel 
          
        />
      </div>
    </main>
  );
}
