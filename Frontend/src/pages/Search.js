import React from "react";
import DefaultMusicgrid from "../components/DefaultMusicgrid";

const Search = () => {
  return (
    <div>
      <form className='flex gap-6 flex-col items-start mb-10'>
        <input
          type='text'
          className='border-green-600 outline-none p-4 border-4 rounded-md bg-neutral-100 text-green-600 text-4xl font-semibold w-full'
          placeholder='Enter song'
          autoFocus
        />
        <button className='bg-green-600 py-3 px-6 rounded-full text-xl font-semibold'>
          Search
        </button>
      </form>
      <DefaultMusicgrid />
    </div>
  );
};

export default Search;
