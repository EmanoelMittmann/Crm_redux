import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../molecules/Footer";
import Navbar from "../../molecules/NavBar";
import SideBar from "../../molecules/SideBar";
import AddressContact from "../../organisms/Address&Contact";
import RegisterCustomers from "../../organisms/RegisterCustomers";
import { ContainerForm, PrimaryText, ContainerFather } from "./style";

const RegisterCustomersIndex = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    facebook: "",
    linkedin: "",
    birthdate: "",
    cep:"",
    address:"",
    street:"",
    city:"",
    number:"",
    complement:"",
    uf:"",
  })

  const Modal = useSelector(state => state.Modal)

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home')
  };
  return (
    <>
      <Navbar/>
      {Modal && <SideBar/>}
      <ContainerFather>
        <PrimaryText>Dados Profissionais</PrimaryText>
        <ContainerForm onSubmit={(e) => handleSubmit(e)} id="register">
          <RegisterCustomers />
          <AddressContact data={data} setData={setData}/>
        </ContainerForm>
        <Footer
          type="submit"
          form="register"
          onClick={() => {}}
        />
      </ContainerFather>
    </>
  );
};

export default RegisterCustomersIndex;
