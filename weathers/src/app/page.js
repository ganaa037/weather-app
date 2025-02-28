"use client";

import { Card, Circles } from "@/components";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import axios from "axios";

export default function Home() {
  axios
    .get(
      "https://api.weatherapi.com/v1/forecast.json?key=c54db69bc7dc4466bf415506241712&q=Tokyo"
    )
    .then((res) => console.log(res.data));

  return (
    <div className="flex h-screen relative justify-center ">
      <div className="bg-[#F3F4F6] w-[50%] h-screen flex justify-center items-center">
        <Input className={"absolute top-10 left-10"}></Input>
        <Card
          temp={"26°"}
          text={"Bright"}
          img={
            "https://s3-alpha-sig.figma.com/img/3c6b/babb/0657324bf17d1bd5169b60a7fbcb80b1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uVwKHLA2r0mB54mUCGA3sxRal85xaGrB10-WtvmM-SlHJ9avtIeSEY5L9pGLJd9sN9K2nlTm-t75gLnBzjZ5o630U8nXaaPzxY-Q~6W6xqde3xBb5l5DqGklTN241rg1PmtRLRUlH-AwkqcTz7DoMXnipYL~12HTmUZqiU8biX-Iv1E~5OpXDTeJuT2VKLSuAnDYSph060VwNsEtsapKYZBMvI5Fpfdzf1tzwiF~LwqfhzNFqozotdHJP20gxpwsKvMbw-CWA26NDtbr5j7uPjepLCTWwmZ-NvwDoZOLeARlpd5LtLfSabJOl7OUWV9~fm1X1PiJGr8zf95gezSSTw__"
          }
        />
      </div>
      <div className="relative bg-black w-[50%] h-screen flex justify-center items-center">
        <Card
          text={"Clear"}
          temp={"16°"}
          date={"September 10, 2021"}
          img="https://s3-alpha-sig.figma.com/img/b6fe/b523/f01b7c0c0765dab6de4f9f5cbb022e1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GnqkFrtyd5NpkYxprvjxMj2ckCkgwwp2Bk65oBFIuU4joqvzDi-VaizLlo2B4VuAUqqeO1rUdh1HiIurvvva~N6YfW7u-rh55-nVhRrl1~xO-wxovybvB2kA1Us4SB5QkGYbMrbZ07KzopgLCYDXhiAOcNCgVfy~4NIOoWa7FOMMjYUKDiSBMv2OeVmjNFMhln4ImSY05rsvbeAwZsASVVm8lyf-EcD5JRmIsnxn0oBPq1UUoFlPQ8THPRAqhbkt1Q6l2LjfzxKzCiituC4v5N3JD9iTFPZz~BQG8TD8T5tmaC5oIXAQOBazpfXJP1tUQ6k1CVna5P9Pxz7xpsOmww__"
        />
        <img
          className="absolute top-[73%] left-[62%] w-[128px] h-[128px]"
          src="Ellipse 22.svg"
        ></img>
      </div>

      <div className="flex">
        <Circles className={"size-[1340px]"} />
        <Circles className={"size-[940px]"} />
        <Circles className={"size-[540px]"} />
        <Circles className={"size-[340px]"} />
        <Circles>
          <div
            className={
              " flex size-[140px] rounded-full justify-center relative items-center bg-[#F3F4F6]"
            }
          >
            <Icon classname="flex justify-center absolute items-center"></Icon>
          </div>
        </Circles>
      </div>
    </div>
  );
}
