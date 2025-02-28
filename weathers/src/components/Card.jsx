import { IoLocationOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
export const Card = ({ img, date, temp, text }) => {
  return (
    <div
      className="absolute w-[414px] h-[828px] bg-custom 
 rounded-[48px] backdrop-blur-md z-20 flex flex-col items-center"
    >
      <div className="flex flex-col w-[398px] h-[504px] bg-custom rounded-[42px] items-center gap-[49px]">
        <div className="flex gap-[112px] items-center">
          <div className="flex flex-col pl-[40px] pt-[56px]">
            <p className="text-[18px] text-[#9CA3AF] font-[500]">{date}</p>
            <p className=" text-[#111827] text-[48px] font-extrabold ">
              Kraków
            </p>
          </div>
          <IoLocationOutline className="w-[32px] h-[32px]" />
        </div>
        <div className="size-[264.891px]">
          <img src={img} />
        </div>
      </div>
      <div
        className="size-[144px]
       text-center text-[100px] font-extrabold justify-center items-center text-black"
      >
        {temp}
      </div>
      <p className="text-[#FF8E27]">{text}</p>
      <div className="flex justify-between w-[318px]">
        <CiHome className="w-[32px] h-[32px]" />
        <IoLocationOutline className="w-[32px] h-[32px]" />
        <CiHeart className="w-[32px] h-[32px]" />
        <CiUser className="w-[32px] h-[32px]" />
      </div>
    </div>
  );
};
