import styled from "styled-components";

export const DinamicContainer = styled.div`
    min-width: 20%;
    width: ${ props => props.width};
    box-shadow: 1px 0px 10px white;
    min-height: 5em;
    border-radius: 3px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DinamicBlocks = styled.div`
    width: ${ props => props.width};
    height: ${props => props.height};
    background-color: white;
    box-shadow: 1px 0px 10px white;
    border-radius: 3px;
`

export const SubContainer = styled.div`
    font-family: 'Roboto';
    padding: 10px;
`

export const SubContainerDate = styled.div`
    outline: 1px solid #dcdcdc;
    display: flex;
    align-items: center;
    border-radius:8px;
    padding: 5px;
`