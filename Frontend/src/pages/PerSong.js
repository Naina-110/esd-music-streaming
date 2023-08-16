import React from "react";
import { useParams } from "react-router-dom";
import music from "../data/music";

const PerSong = () => {
  const { index } = useParams();
  const {
    title,
    album: { cover_big, title: titleAlbum },
    artist: { name, picture_big },
    id,
  } = music[index];

  return (
    <div className='p-4 pt-6'>
      <div className='flex justify-around'>
        <div className='mb-8'>
          <h2 className='text-green-100 font-bold text-6xl mb-6'>{title}</h2>
          <p className='text-2xl font-semibold'>- {name}</p>
          <div className='w-60 rounded overflow-hidden border-2 border-green-300 mt-8'>
            <img
              className='w-full object-cover'
              src={cover_big}
              alt={titleAlbum}
            />
          </div>
          <p className='text-2xl font-semibold mt-4 '>- {titleAlbum}</p>
        </div>
        <div>
          <div className='w-96 rounded overflow-hidden border-2 border-green-300'>
            <img className='w-full object-cover' src={picture_big} alt={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerSong;
