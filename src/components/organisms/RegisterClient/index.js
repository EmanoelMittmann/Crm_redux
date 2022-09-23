import React from "react";
import Input from "../../atoms/Input";
import { ContainerRow } from "../RegisterCustomers/style";
import { RegisterClientContainer } from "./style";

const RegisterClient = ({data,setData}) => {
  return (
    <RegisterClientContainer>
        <div className="secondary">
          <h3>Dados Pessoais</h3>
        </div>
      <ContainerRow>
        <Input
          id="name"
          name="Name"
          value={data.name}
          onChange={(e) => setData({...data,name : e.target.value})}
          placeholder="Your name"
          type="text"
        />
        <Input
          id="last"
          name="Last Name"
          value={data.lastName}
          onChange={(e) => setData({...data,lastName : e.target.value})}
          placeholder="Last Name"
          type="text"
        />
        <Input
          id="email"
          name="Email"
          value={data.email}
          onChange={(e) => setData({...data,email : e.target.value})}
          placeholder="YourEmail@exemple.com"
          type="email"
        />
      </ContainerRow>
      <ContainerRow>
        <Input
          id="Phone"
          name="Phone"
          value={data.phone}
          onChange={(e) => setData({...data,phone : e.target.value})}
          placeholder="(XX) XXXXX-XXXX"
          type="text"
        />
        <Input
          id="facebook"
          name="Facebook"
          value={data.facebook}
          onChange={(e) => setData({...data,facebook : e.target.value})}
          placeholder="Facebook"
          type="text"
        />
        <Input  
          id="linkedin"
          name="Linkedin"
          value={data.linkedin}
          onChange={(e) => setData({...data,linkedin : e.target.value})}
          placeholder="Linkedin"
          type="text"
        />
      </ContainerRow>
      <ContainerRow >
        <Input
          id="birthdate"
          name="Birth Date"
          value={data.birthdata}
          onChange={(e) => setData({...data,birthdate: e.target.value})}
          type="Date"
        />
      </ContainerRow>
    </RegisterClientContainer>
  );
};

export default RegisterClient;
