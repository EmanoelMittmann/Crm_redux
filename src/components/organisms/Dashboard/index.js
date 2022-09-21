import React, { useState } from "react";
import Navbar from "../../molecules/NavBar";
import SideBar from "../../molecules/SideBar";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && <SideBar setIsOpen={setIsOpen}/>}
      
    </>
  );
};

export default Dashboard;
