import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../molecules/Footer";
import Navbar from "../../molecules/NavBar";
import SideBar from "../../molecules/SideBar";
import AddressContact from "../../organisms/Address&Contact";
import RegisterClient from "../../organisms/RegisterClient";
import {
  ContainerFather,
  ContainerForm,
  PrimaryText,
} from "../RegisterCustomers/style";
import { instance } from "../../../utils/instance";

const RegisterDataClient = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    instance.post('/RegisterClient', data).then(navigate('/home')).catch(error => console.log(error.response.message))
  };

  const testeDb = () => {
    instance.get('/Client').then(res => console.log(res.data))
  }
  testeDb()
 

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <SideBar setIsOpen={setIsOpen} />}
      <ContainerFather>
        <PrimaryText>Cadastro de Cliente</PrimaryText>
        <ContainerForm id="client" onSubmit={(e) => handleSubmit(e)}>
          <RegisterClient data={data} setData={setData} />
          <AddressContact data={data} setData={setData} />
        </ContainerForm>
        <Footer type="submit" form="client" onClick={() => {}} />
      </ContainerFather>
    </>
  );
};

export default RegisterDataClient;
