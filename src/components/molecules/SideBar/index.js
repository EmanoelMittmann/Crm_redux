import React from "react";
import {
  ContainerChildren,
  ContainerSideBar,
  ContainerChildrenImg,
} from "./style";
import Elements from "../../atoms/ElementSideBar";
import img from "../../../assets/Imgs/img2.png";

const SideBar = ({setIsOpen}) => {
  return (
    <ContainerSideBar>
      <div className="FatherImg">
        <ContainerChildrenImg src={img} />
        <span class="material-symbols-outlined arrow" onClick={() => setIsOpen(prev => !prev)}>arrow_back</span>
      </div>
      <ContainerChildren>
        <Elements name="diversity_3" value="SalesPerson" />
        <Elements name="handshake" value="Clients" />
        <Elements name="summarize" value="Reports" />
        <Elements name="account_circle" value="User" />
        <Elements name="Settings" value="Settings" />
        <Elements name="Mail" value="Mails" />
        <Elements name="Token" value="Token" />
        <Elements name="Logout" value="logout" />
      </ContainerChildren>
    </ContainerSideBar>
  );
};

export default SideBar;
