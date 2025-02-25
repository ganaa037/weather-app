export const Icon = ({ className }) => {
  return (
    <div className="flex ">
      <img
        className={
          " absolute top-[45%] left-[46%] w-[ 43.289px] h-[86px] " + className
        }
        src="/Group1.svg"
      ></img>
      <img
        className={
          " absolute top-[45%] right-[46%] w-[ 43.289px] h-[86px] " + className
        }
        src="/Group.svg"
      ></img>
    </div>
  );
};
