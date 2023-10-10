import React from "react";

function Hamburger() {
  return (
    <div className="flex flex-col gap-1 items-end group cursor-pointer w-6">
      <div className="line-1 w-4 h-[3px] dark:bg-white rounded-sm group-hover:w-3 group-hover:bg-primary duration-200 bg-foreground"></div>
      <div className="line-2 w-2 h-[3px] rounded-sm group-hover:w-6 duration-200 bg-primary group-hover:bg-foreground "></div>
      <div className="line-3 w-6 h-[3px] dark:bg-white rounded-sm group-hover:w-2 group-hover:bg-primary duration-200 bg-foreground"></div>
    </div>
  );
}

export default Hamburger;
