import styled from "styled-components";

export const RegisterCustomerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .secondary{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        margin: 10px;
        padding: 2em;
        text-align: center;
    }
`

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.content};
`
