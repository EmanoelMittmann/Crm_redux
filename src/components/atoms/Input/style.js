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
        font-weight: bold ;
        text-align: left;
        color: black;

    }
`

export const VariableInput = styled.input`
    border: none;
    border: 1px solid gray;
    height: 2.5em;
    outline: none;
    color: black;
    font-weight: bold;
    font-family: Roboto, sans-serif;
    width: 20em;
    padding-left: 1em;
    border-radius: 7px;
    opacity: .3;

    ::placeholder{
        text-align: center;
        color: black;
    }
`