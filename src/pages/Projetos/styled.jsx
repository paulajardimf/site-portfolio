import styled from "styled-components";

export const ContainerProjetos = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`
export const ContainerSection = styled.section`
    margin: 15px 0;
    margin-bottom: 50px;
    align-self: flex-start;
`

export const Titulo = styled.h2`
    font-weight: 700;
    font-size: 2rem;
    margin: 5px 0;
    color: #373737;
`

export const Texto = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    color: #666666;
    margin: 20px 0;
`

export const ContainerCard = styled.section`
    display: flex;
    align-self: auto;
    justify-content: space-evenly;
    gap: 30px;
    flex-wrap: wrap;
`