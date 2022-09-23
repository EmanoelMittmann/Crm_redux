import React from "react";
import { FooterContainer, ButtonFooter } from "./style";

const Footer = ({ type, onClick, form }) => {
  return (
    <FooterContainer>
      <ButtonFooter
        color="white"
        background="black"
        type={type}
        form={form}
      >
        Cadastrar
      </ButtonFooter>
      <ButtonFooter
        color="black"
        background="white"
        outline="1px solid gray"
        onClick={onClick}
      >
        Cancelar
      </ButtonFooter>
    </FooterContainer>
  );
};

export default Footer;
