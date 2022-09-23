import styled from "styled-components";

export const Element = styled.button`
    font-family: 'Roboto', sans-serif;
    width: 20em;
    background-color: white;
    height: 3em;
    border: none;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    gap: 10px;
    color: brown;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover{
        transform: translate(10%, 0%);
        background-color: #5C2722;
        color: white;
    }
    &:active{
        transform: translate(10%,-10%);
        border-left: 10px solid black;
        background-color: #5C2722;
        color: white;
    }
    &:focus-visible, &:focus{
        transform: translate(0%,0%);
        border-left: 10px solid black;
        background-color: gray;
        color: black;
    }
`