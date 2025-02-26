import { IoLocationOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
export const Krakow = ({ img }) => {
  return (
    <div
      className="absolute left-[193px] w-[414px] h-[828px] bg-[#FFFFFFBF]
 rounded-[48px] flex flex-col items-center"
    >
      <p className="w-full pl-[40px]">September 10, 2021</p>
      <div className="flex flex-col w-[398px] h-[504px] rounded-[42px] items-center gap-[49px]">
        <div className="flex gap-[112px]">
          <p className=" text-[#111827] text-[48px] font-extrabold ">Krakow</p>
          <IoLocationOutline className="w-[32px] h-[32px]" />
        </div>
        <img className="w-[262.108px] h-[262.108px] " src={img} />
      </div>
      <div className="pl-[48px] w-full">
        <p className=" text-[144px] font-extrabold text-black">26°</p>
        <p className="text-[#FF8E27]">Bright</p>
      </div>
      <div className="flex justify-between w-[318px]">
        <CiHome className="w-[32px] h-[32px]" />
        <IoLocationOutline className="w-[32px] h-[32px]" />
        <CiHeart className="w-[32px] h-[32px]" />
        <CiUser className="w-[32px] h-[32px]" />
      </div>
    </div>
  );
};
