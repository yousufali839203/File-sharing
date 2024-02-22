import React from "react";
import { useRef, useState, useEffect } from "react";
import { uploadFile } from "../../services/api";
import QRCode from "qrcode.react";

import { toast } from "react-toastify";

const Content = () => {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  console.log(file);
  const fileInputRef = useRef();

  useEffect(() => {
    const getImg = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImg();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const copyLinkToClipboard = () => {
    toast.success("Link copied to clipboard!");
    navigator.clipboard.writeText(result);
  };
  return (
    <div className="flex justify-center items-center h-[92vh] bg-[#C9D7DD]">
      <div className="bg-[#967E76] border border-solid border-black h-[500px] w-[490px] flex justify-center">
        <div className=" flex flex-col ">
          <h1 className="font-bold text-[35px] ml-5 mt-4 text-white">
            Super simple file sharing!
          </h1>
          <p className=" ml-5 mt-4 leading-7  text-white text-[26px] justify-center">
            Upload as many files as you like up to 2 GB and get a link to share.
          </p>
          <button
            onClick={() => onUploadClick()}
            type="button"
            class="flex mt-[40px] items-center mx-[110px] justify-center  py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
          >
            Upload File
          </button>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            ref={fileInputRef}
            className="hidden"
          />

          <a
            href={result}
            target="_blank"
            className="mt-10 mx-[40px] col-span-10"
          >
            {result}
          </a>
          {result && (
            <button
              onClick={copyLinkToClipboard}
              className=" mt-2 w-[140px] h-[40px] ml-[170px] col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Copy Link
            </button>
          )}

          {result && (
            <div className=" mx-auto w-1/2 mt-[30px] ml-[175px]">
              <QRCode value={result} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
