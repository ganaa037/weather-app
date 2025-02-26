import { Circles, Krakow } from "@/components";
import { Icon } from "@/components/Icon";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen relative justify-center ">
      <div className="bg-[#F3F4F6] w-[50%] h-screen"></div>
      <div className="bg-black w-[50%] h-screen"></div>
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
      <Krakow
        img={
          "https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
        }
      ></Krakow>
    </div>
  );
}
