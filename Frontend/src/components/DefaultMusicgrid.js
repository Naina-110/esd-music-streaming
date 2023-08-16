import React from "react";
import music from "../data/music";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DefaultMusicgrid = () => {
  const navigate = useNavigate();

  return (
    <div className='grid grid-cols-4 gap-10'>
      {music.map((item, i) => {
        const {
          title,
          album: { cover_medium },
          artist: { name },
          id,
        } = item;
        return (
          <div
            key={id}
            className='cursor-pointer group'
            onClick={() => navigate(`/song/${i}`)}
          >
            <div className='rounded overflow-hidden mb-2'>
              <img
                className='w-full object-cover'
                src={cover_medium}
                alt={title}
              />
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-lg font-semibold'>{title}</p>
                <p className='opacity-70'>{name}</p>
              </div>
              <button className='bg-green-700 p-2 rounded-full group-hover:scale-110 transition-transform group-active:scale-95'>
                <BsFillPlayFill className='text-lg' />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DefaultMusicgrid;
