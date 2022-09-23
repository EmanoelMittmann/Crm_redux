import styled from "styled-components";

export const ContainerStatus = styled.div`
    color: ${props => props.color};
    background-color: ${props => props.backcolor};
    border-radius: 8px;
    height: 2em;
    width: 5em;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`

export const ContainerMetrics = styled.div`
    padding: 10px;

    p{
        font-size:1em;
        color: #555;
    }
    strong{
        font-size:1.4em;
        font-family: 'Roboto', sans-serif;
    }
`