import React, { useEffect } from "react";
import {
  ContainerChildren,
  ContainerSideBar,
  ContainerChildrenImg,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Elements from "../../atoms/ElementSideBar";
import img from "../../../assets/Imgs/img2.png";
import { counter } from "../../../redux/actions";

const SideBar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <ContainerSideBar>
      <div className="FatherImg">
        <ContainerChildrenImg src={img} />
        <span class="material-symbols-outlined arrow" onClick={() => dispatch({type: 'CLOSE'})}>arrow_back</span>
      </div>
      <ContainerChildren>
        <Elements name='dashboard' value='Dashboard' onClick={() => navigate('/home')}/>
        <Elements name="diversity_3" value="SalesPerson" onClick={() => navigate('/customers')} />
        <Elements name="handshake" value="Clients" onClick={() => navigate('/clients')}/>
        <Elements name="summarize" value="Reports" />
        <Elements name="account_circle" value="User" />
        <Elements name="Settings" value="Settings" />
        <Elements name="Mail" value="Mails" />
        <Elements name="Token" value="Token" onClick={() => dispatch({type: 'CLIENT'})}/>
        <Elements name="Logout" value="logout" onClick={() => {
          localStorage.removeItem('login')
          navigate('/')
        } }/>
      </ContainerChildren>
    </ContainerSideBar>
  );
};

export default SideBar;
