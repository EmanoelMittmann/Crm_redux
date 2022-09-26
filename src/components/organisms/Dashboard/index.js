import React, { useState } from "react";
import { months } from "../../../utils/Month";
import Block from "../../atoms/Blocks";
import {
  SubContainer,
  SubContainerDate,
  DinamicBlocks,
} from "../../atoms/Blocks/style";
import Status from "../../atoms/Status";
import Navbar from "../../molecules/NavBar";
import SideBar from "../../molecules/SideBar";
import { Template, ContainerRow, ContainerText, ContainerIcon } from "./style";
import { LineChart, PieChart } from "react-chartkick";
import "chartkick/chart.js";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./data";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const newDate = new Date();

  const Modal = useSelector((state) => state.Modal);
  const CustomersActives = useSelector((state) => state.Counter);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      {Modal && <SideBar />}
      <Template>
        <ContainerRow>
          <Block width="100%">
            <SubContainer>
              <h2>Welcome Back</h2>
              <p>
                Create pages using a variety of features that leverage jampack
                components
              </p>
            </SubContainer>
            <SubContainer>
              <SubContainerDate>
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
                {`Month: ${months[newDate.getMonth()]} in Date: ${newDate
                  .getDate()
                  .toString()} 
                `}
              </SubContainerDate>
            </SubContainer>
          </Block>
        </ContainerRow>

        <ContainerRow content="space-between">
          <DinamicBlocks width={"29%"} height={"15em"}>
            <ContainerText>
              <h4>Actives Customers</h4>
            </ContainerText>
            <ContainerIcon>
              <span className="material-symbols-outlined">
                supervisor_account
              </span>
              <h2>{CustomersActives}</h2>
            </ContainerIcon>
          </DinamicBlocks>
          <DinamicBlocks width={"69%"} height={"15em"}>
            <ContainerRow content="space-around">
              <Status
                Category={"Test "}
                collaborators={"5.2"}
                isProfit={true}
                number={25}
              />
              <Status
                Category={"Test"}
                collaborators={"2"}
                isProfit={false}
                number={0.8}
              />
              <Status
                Category={"Test"}
                collaborators={"7.2"}
                isProfit={false}
                number={0.2}
              />
            </ContainerRow>
            <ContainerRow content="space-around">
              <Status
                Category={"Test"}
                collaborators={"2.2"}
                isProfit={true}
                number={5}
              />
              <Status
                Category={"Test"}
                collaborators={"1.0"}
                isProfit={false}
                number={0.2}
              />
              <Status
                Category={"Test"}
                collaborators={"4.1"}
                isProfit={true}
                number={5.0}
              />
            </ContainerRow>
          </DinamicBlocks>
        </ContainerRow>
        <ContainerRow content="space-between">
          <DinamicBlocks width={"69%"} height={"25em"} display="flex">
            <LineChart download={{ background: "#fff" }}  data={data}/>
          </DinamicBlocks>
          <DinamicBlocks width={"29%"} height={"25em"} display="flex">
            <PieChart
              data={{
                Clients: 44,
                SalesPerson: 21,
                Benefit: 92,
                Productivity: 10,
              }}
            />
          </DinamicBlocks>
        </ContainerRow>

        <ContainerRow>
          <DinamicBlocks width={"100%"} height={"17em"}></DinamicBlocks>
        </ContainerRow>
      </Template>
    </>
  );
};

export default Dashboard;
