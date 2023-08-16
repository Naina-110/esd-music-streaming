import React from "react";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full bg-component rounded py-4 px-8 shadow-md'>
      <h1 className='text-2xl font-bold'>Logo</h1>
      <div className='flex text-xl gap-8'>
        <button className='underline underline-offset-2'>Sign up</button>
        <button className='rounded-full py-2 px-6 bg-white text-lg font-bold text-black'>
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
