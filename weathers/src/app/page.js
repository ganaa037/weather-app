import { Circles, Krakow } from "@/components";
import { Icon } from "@/components/Icon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen relative justify-center">
      <div className="bg-white w-[50%]"></div>
      <div className="bg-black w-[50%] "></div>
      <div className="flex">
        <Circles className={"size-[1340px]"} />
        <Circles className={"size-[940px]"} />
        <Circles className={"size-[540px]"} />
        <Circles className={"size-[340px]"} />
        <Circles className={"size-[140px]"} />
      </div>
      <Icon></Icon>
      <Icon
        className={"/Users/24LP9559/Desktop/weather/weathers/public/group.svg "}
      ></Icon>
      <Krakow></Krakow>
    </div>
  );
}
