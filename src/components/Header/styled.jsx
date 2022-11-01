import styled from "styled-components";

export const ContainerGlobal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerHeader = styled.div`
  display: flex;
  height: 20vh;
  width: 80vw;
  align-items: center;
  justify-content: space-between;
  margin: 0 3vw;
`;

export const LinksHeader = styled.ul`
  display: flex;
  gap: 2vw;
  list-style: none;
`;

export const BotaoLinkInterno = styled.button`
  border: none;
  background-color: white;
  font-size: 1rem;
  font-weight: 200;
  cursor: pointer;
`;

export const IconeTag = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  background-image: -webkit-linear-gradient(180deg, #e70faa, #00c0fd);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export const ContainerRedes = styled.div`
  display: flex;
  gap: 0.5vw;
`;
