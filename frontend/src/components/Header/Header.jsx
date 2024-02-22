import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex items-center justify-between h-[60px] w-[100%] bg-[#9195F6]">
      <div>
        <a
          href="#"
          className="flex items-center text-white font-bold text-[24px] ml-8"
        >
          <FaRegFolderOpen className="mr-1" />
          File.io
        </a>
      </div>
      <div className="flex items-center gap-10 text-white mr-[60px] text-[20px] font-medium">
        <a href="">About</a>
        <a href="">Plans</a>
        <a href="">Developers</a>
        <a href="">Docs</a>
        <span>|</span>

        <a href="">Sign up</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default Header;
