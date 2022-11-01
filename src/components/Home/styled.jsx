import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: calc(100vh - 20vh);
`;

export const FotoPerfil = styled.img`
  height: 350px;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(180deg, #e70faa, #00c0fd) border-box;
  border: 10px solid transparent;
  border-radius: 200px;
`;

export const DivTexto = styled.div`
  font-weight: 700;
  font-size: 2.625rem;
  width: 350px;
`;
