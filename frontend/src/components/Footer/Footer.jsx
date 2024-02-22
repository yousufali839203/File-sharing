import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className=" h-[300px] bg-[#81689D]">
        <div className=" flex justify-evenly  ">
          <div className=" mt-[60px]  grid grid-rows-2 grid-flow-row">
            <div className="">
              <a
                href="#"
                className="flex items-center text-white font-bold  text-[24px] "
              >
                <FaRegFolderOpen />
                File.io
              </a>
            </div>
            <div className="text-white font-serif text-[20px] mt-1">
              © 2024{" "}
              <span className="border-b border-dotted">Mr Yousuf Ali LLC</span>
            </div>
          </div>
          <div className=" mt-[60px]  grid grid-rows-4 grid-flow-row text-white  text-[20px] font-medium ">
            <div className="mt-1.5  border-b border-dotted">
              Terms of Service
            </div>
            <div className="mt-1.5  border-b border-dotted">Privacy Policy</div>
            <div className="mt-1.5  border-b border-dotted">Contact</div>
            <div className="mt-1.5  border-b border-dotted"> Advertise</div>
          </div>
          <div className="grid grid-rows-2 grid-flow-row mt-[70px] ">
            <div className="flex flex-row gap-2">
              <span>
                <a href="">
                  <FaSquareTwitter size={30} color="white" />
                </a>
              </span>{" "}
              <span>
                <a href="">
                  <FaFacebook size={30} color="white" />
                </a>
              </span>{" "}
              <span>
                <a href="">
                  <FaInstagramSquare size={30} color="white" />
                </a>
              </span>
            </div>
            <div className="flex mt-1 flex-row gap-2">
              <span>
                <a href="">
                  <FaLinkedin size={30} color="white" />
                </a>
              </span>{" "}
              <span>
                <a href="">
                  {" "}
                  <FaGithub color="white" size={30} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
