import styled from "styled-components";

export const Template = styled.section`
  padding: 20px;
  position: relative;
  top: 3em;
`;

export const ContainerRow = styled.div`
  display: flex;
  justify-content: ${(props) => props.content};
  margin-bottom: 1em;

  .status-1{
    p{
        font-size: 1.2em;
        color: #777;
    }
    padding: 1em;
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1px solid #dcdcdc;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    span{
        font-size: 7em;
        color:#247BA0;
    }

    h2{
        color:#247BA0;
        position: absolute;
        top: 11em;
        left: 10.5em;
    }
`
