import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color:white;
    margin: 10px;

    label{
        padding: 10px;
        font-family: Roboto, sans-serif;
        text-align: left;
    }
`

export const VariableInput = styled.input`
    border: none;
    height: 2.5em;
    outline: none;
    font-family: Roboto, sans-serif;
    width: 20em;
    border-radius: 7px;
    opacity: .3;

    ::placeholder{
        text-align: center;
        color: black;
    }
`