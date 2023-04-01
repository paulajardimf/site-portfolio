import styled from "styled-components";

export const ContainerTecnologias = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin: 5px 0;
  color: #373737;

`;

export const Texto = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  color: #666666;
  align-self: flex-start;
  margin: 20px 0;
`;

export const ContainerSection = styled.section`
  margin: 15px 0;
  width: 100%;
  @media screen and (min-device-width: 30em) and (max-device-width: 58.5em) {
    margin-left: 1.25rem;
  }
`;

export const ContainerIcones = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
    @media screen and (min-device-width: 30em) and (max-device-width: 58.5em) {
    justify-content: center;
    margin: 20px auto;
    margin-right: 20px;
  }
`;

export const ContainerIconesUnidades = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 6.25rem;
  }
`;
