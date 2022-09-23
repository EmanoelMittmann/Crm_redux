import React from "react";
import Input from "../../atoms/Input";
import { ContainerRow } from "../RegisterCustomers/style";
import { RegisterAddressContainer } from "./style";

const AddressContact = ({data, setData}) => {
  return (
    <>
    
    <RegisterAddressContainer>
      <div className="secondary">
        <h3>Endereço e Contato</h3>
      </div>
      <ContainerRow>
        <Input
          name="CEP"
          placeholder="CEP"
          id="cep"
          value={data.cep}
          onChange={(e) => setData({...data, cep:e.target.value})}
          type="number"
        />
        <Input
          name="Address"
          placeholder="Address"
          id="address"
          value={data.address}
          onChange={(e) => setData({...data, address:e.target.value})}
          type="text"
        />
        <Input
          name="Street"
          placeholder="Street"
          id="street"
          value={data.street}
          onChange={(e) => setData({...data, street:e.target.value})}
          type="text"
        />
      </ContainerRow>
      <ContainerRow>
        <Input
          name="City"
          placeholder="City"
          id="city"
          onChange={(e) => setData({...data, city:e.target.value})}
          type="text"
        />
        <Input
          name="Number"
          placeholder="Number"
          id="number"
          onChange={(e) => setData({...data, number:e.target.value})}
          type="number"
        />
        <Input
          name="Complement"
          placeholder="Complement"
          id="complement"
          onChange={(e) => setData({...data,complement:e.target.value})}
          type="text"
        />
      </ContainerRow>
      <ContainerRow>
        <Input
          name="UF"
          placeholder="UF"
          id="uf"
          onChange={(e) => setData({...data,uf:e.target.value})}
          type="text"
        />
      </ContainerRow>
    </RegisterAddressContainer>
    </>
  );
};

export default AddressContact;
