import React from "react";
import DefaultMusicgrid from "../components/DefaultMusicgrid";

const Home = () => {
  return (
    <div>
      <h2 className='text-6xl font-bold text-green-200 mb-10 mt-8'>
        Top this week
      </h2>
      <DefaultMusicgrid />
    </div>
  );
};

export default Home;
