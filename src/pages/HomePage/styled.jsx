import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 20vh);
  @media screen and (min-device-width: 30em) and (max-device-width: 58.05em) {
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media screen and (max-device-width: 30em) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const FotoPerfil = styled.img`
  height: 25rem;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(180deg, #e70faa, #00c0fd) border-box;
  border: 10px solid transparent;
  border-radius: 200px;
    @media screen and (max-device-width: 30em) {
    height: 20rem;
  }
`;

export const DivTexto = styled.div`
  font-weight: 700;
  font-size: 2.625rem;
  letter-spacing: 0.1rem;
  width: 350px;
  color: #373737;
  @media screen and (min-device-width: 30em) and (max-device-width: 58.5em) {
    text-align: center;
  }
  @media screen and (max-device-width: 30em) {
    text-align: center;
  }
`;
