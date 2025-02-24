import { Circles } from "@/components/Index";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-screen w-[100%]">
      <div className="bg-white w-[50%]  "></div>

      <div className="bg-black w-[50%]"></div>
      <Circles></Circles>
    </div>
  );
}
