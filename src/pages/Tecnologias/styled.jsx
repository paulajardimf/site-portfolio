import styled from "styled-components";

export const ContainerTecnologias = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 20vh);
`

export const Titulo = styled.h2`
    font-weight: 700;
    font-size: 1.875rem;
    margin: 5px 0;
    color: #373737;
`

export const Texto = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    color: #666666;
    width: 80vw;
    margin: 20px 0;
`

export const ContainerSection = styled.section`
    margin: 15px 0;
`

export const ContainerIcones = styled.div`
    height: calc(100vh - 50vh);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    gap: 50px;
    margin: 20px 50px;
`

export const ContainerIconesUnidades = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        height: 100px;
    }
`
