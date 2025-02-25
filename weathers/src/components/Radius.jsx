export const Circles = ({ className }) => {
  return (
    <div className="flex">
      <div
        className={
          " flex justify-center left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 absolute rounded-full  border-blue-500 border " +
          className
        }
      ></div>
    </div>
  );
};
