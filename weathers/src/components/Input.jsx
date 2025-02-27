import { CiSearch } from "react-icons/ci";
export const Input = ({ className }) => {
  return (
    <div
      className={
        "flex bg-[#FFF] px-[24px] py-[16px] rounded-[48px] w-[567px] " +
        className
      }
    >
      <CiSearch className="w-[48px] h-[48px] fill-gray-400 opacity-[0.2]" />
      <input
        type="text"
        className="bg-[#FFF] w-[519px] min-w-[318px] h-[48px] text-black"
      />
    </div>
  );
};
