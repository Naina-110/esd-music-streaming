import React from "react";
import SidebarMain from "./SidebarMain";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  return (
    <div className='sticky top-2 w-96 flex flex-col gap-4'>
      <SidebarMain />
      <SidebarProfile />
    </div>
  );
};

export default Sidebar;
