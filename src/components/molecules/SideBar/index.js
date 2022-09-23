import React from "react";
import {
  ContainerChildren,
  ContainerSideBar,
  ContainerChildrenImg,
} from "./style";
import { useNavigate } from "react-router-dom";
import Elements from "../../atoms/ElementSideBar";
import img from "../../../assets/Imgs/img2.png";

const SideBar = ({setIsOpen}) => {

  const navigate = useNavigate()

  return (
    <ContainerSideBar>
      <div className="FatherImg">
        <ContainerChildrenImg src={img} />
        <span class="material-symbols-outlined arrow" onClick={() => setIsOpen(prev => !prev)}>arrow_back</span>
      </div>
      <ContainerChildren>
        <Elements name='dashboard' value='Dashboard' onClick={() => navigate('/home')}/>
        <Elements name="diversity_3" value="SalesPerson" onClick={() => navigate('/Customers')} />
        <Elements name="handshake" value="Clients" onClick={() => navigate('/Clients')}/>
        <Elements name="summarize" value="Reports" />
        <Elements name="account_circle" value="User" />
        <Elements name="Settings" value="Settings" />
        <Elements name="Mail" value="Mails" />
        <Elements name="Token" value="Token" />
        <Elements name="Logout" value="logout" onClick={() => {
          localStorage.removeItem('login')
          navigate('/')
        } }/>
      </ContainerChildren>
    </ContainerSideBar>
  );
};

export default SideBar;
