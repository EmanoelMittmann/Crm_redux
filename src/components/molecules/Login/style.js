import styled from "styled-components";

export const ContainerFormLogin = styled.div`
    background-color: #ffb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: right;
    height: 100vh;
    width: 30em;

    h3{
        color: white;
    }

    form{
        background-color: brown;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 1px 0 10px white;
    }
`
export const ContainerImg = styled.img`
    transform: translate(0%,-40%);
    width: 5em;
    height: 5em;
    border-radius:20px;
    box-shadow: 1px 0px 10px white;
`