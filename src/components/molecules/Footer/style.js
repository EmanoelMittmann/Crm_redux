import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 80%;
    height: 5em;
    background-color: white;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
    border-radius: 0px 0px 8px 8px;
`

export const ButtonFooter = styled.button`
    background-color: ${props => props.background};
    color: ${props => props.color};
    outline: ${props => props.outline};
    width: 10em;
    margin: 10px;
    height: 2em;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 1px 0px 10px gray;
`