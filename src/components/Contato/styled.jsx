import styled from "styled-components";

export const ContainerContato = styled.section`
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 700;
  font-size: 2.625rem;
  color: #373737;

  div {
    background-image: -webkit-linear-gradient(180deg, #e70faa, #00c0fd);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  }
`;
