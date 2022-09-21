import styled from "styled-components";

export const ContainerSideBar = styled.div`
    position: absolute;
    width: 16.8em;
    height: 100%;
    background-color: whitesmoke;

    .FatherImg{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .arrow{
       transform: translate(2em,-30%);
       cursor: pointer;
    }
`
export const ContainerChildren = styled.div`
    height: 100%;
`

export const ContainerChildrenImg = styled.img`
    display: flex;
    align-items: center;
    height: 7em;
    cursor: pointer;
    justify-content: center;
`

