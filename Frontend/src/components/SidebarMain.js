import React from "react";
import { BiSolidHome, BiSolidSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SidebarMain = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col bg-component rounded p-7 text-lg font-semibold gap-6'>
      <div
        className='flex gap-5 items-center cursor-pointer'
        onClick={() => navigate("/")}
      >
        <BiSolidHome className='text-3xl' />
        <p>Home</p>
      </div>
      <div
        className='flex gap-5 items-center cursor-pointer'
        onClick={() => navigate("/search")}
      >
        <BiSolidSearch className='text-3xl' />
        <p>Search</p>
      </div>
    </div>
  );
};

export default SidebarMain;
