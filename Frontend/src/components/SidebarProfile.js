import React from "react";
import { BiLibrary } from "react-icons/bi";

const SidebarProfile = () => {
  return (
    <div className='flex flex-col gap-6 bg-component rounded p-3'>
      <div className='flex items-center gap-4 p-4'>
        <BiLibrary className='text-2xl' />
        <h2 className='text-lg font-semibold opacity-60'>Your Library</h2>
      </div>
      <div className='p-6 bg-component-2 rounded'>
        <p className='font-semibold '>Log in to create your playlist</p>
        <button className='mt-5 rounded-full py-2 px-6 bg-white text-lg font-bold text-black'>
          Log in
        </button>
      </div>
    </div>
  );
};

export default SidebarProfile;
