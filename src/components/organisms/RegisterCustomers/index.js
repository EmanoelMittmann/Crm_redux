import React from "react";
import Input from "../../atoms/Input";
import { RegisterCustomerContainer, ContainerRow } from "./style";

const RegisterCustomers = () => {
  return (
    <>
      <RegisterCustomerContainer>
        <div className="secondary">
          <h3>Dados Pessoais</h3>
        </div>
        <ContainerRow>
          <Input
            name="Name"
            placeholder="Your Name"
            id="name"
            onChange={() => {}}
            type="text"
          />
          <Input
            name="Last Name"
            placeholder="Last Name"
            id="lastName"
            onChange={() => {}}
            type="text"
          />
          <Input name="Birth Date" id="Date" onChange={() => {}} type="date" />
        </ContainerRow>
        <ContainerRow>
          <Input
            name="CPF"
            placeholder="CPF"
            id="cpf"
            onChange={() => {}}
            type="number"
          />
          <Input
            name="RG"
            placeholder="RG"
            id="cpf"
            onChange={() => {}}
            type="number"
          />
          <Input
            name="Phone"
            placeholder="Phone"
            id="phone"
            onChange={() => {}}
            type="number"
          />
        </ContainerRow>
      </RegisterCustomerContainer>
    </>
  );
};

export default RegisterCustomers;
