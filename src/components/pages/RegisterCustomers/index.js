import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button";
import Footer from "../../molecules/Footer";
import Navbar from "../../molecules/NavBar";
import SideBar from "../../molecules/SideBar";
import AddressContact from "../../organisms/Address&Contact";
import RegisterCustomers from "../../organisms/RegisterCustomers";
import { ContainerForm, PrimaryText, ContainerFather } from "./style";

const RegisterCustomersIndex = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home')
  };
  return (
    <>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && <SideBar setIsOpen={setIsOpen} />}
      <ContainerFather>
        <PrimaryText>Dados Profissionais</PrimaryText>
        <ContainerForm onSubmit={(e) => handleSubmit(e)} id="register">
          <RegisterCustomers />
          <AddressContact />
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
