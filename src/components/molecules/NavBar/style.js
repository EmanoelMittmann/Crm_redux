import styled from "styled-components";

export const NavContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 3.5em;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    box-shadow: 1px 0 5px whitesmoke;

    .position_arrow{
        position: absolute;
        cursor: pointer;
        transform: translate(-80rem, 80%);
    }
`

export const NavContainerChildren = styled.div`

    display: flex;
    gap: 25px;
    margin: 10px;
    flex-direction: row-reverse;
    align-items: center;
    

    .Payment{
        font-size: 1.8em;
        cursor:pointer;
    }
    .Notification{
        font-size: 1.8em;
        cursor: pointer;
    }
    .Mail{
        font-size: 1.8em;
        cursor: pointer;
    }
`

export const ImgContainer = styled.div`
    width: 3em;
    height: 3em;
    margin-right: 2em;
    margin-left: 3em;
    border-radius: 50%;
    background-color: whitesmoke;
`