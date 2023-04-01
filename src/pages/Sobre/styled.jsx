import styled from "styled-components";

export const ContainerSobre = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .gif {
    width: 32rem;
  }
  @media screen and (max-device-width: 30em) {
    
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-device-width: 30em) and (max-device-width: 58.05em) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-device-width: 30em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  @media screen and (min-device-width: 30em) and (max-device-width: 58.5em) {
    margin: 0 20px;
  }
  @media screen and (max-device-width: 30em) {
    /* margin: 0 20px; */
    width: 75%;
  }
`;

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin: 10px 0;
  color: #373737;
`;

export const Texto = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  color: #666666;
  margin: 15px 0;
  text-align: justify;
`;
