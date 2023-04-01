import styled from "styled-components";

export const ContainerGlobal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-device-width: 30em) and (max-device-width: 58.05em) {
    margin: 0 1.25rem;
  }
  @media screen and (max-device-width: 30em) {
    margin: 0 0.5rem;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  height: 9rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

export const LinksHeader = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  @media screen and (min-device-width: 30em) and (max-device-width: 58.5em) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-device-width: 30em) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const BotaoLinkInterno = styled.button`
  border: none;
  background-color: white;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
  cursor: pointer;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);

  :hover {
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

export const IconeTag = styled.div`
  font-weight: 600;
  font-size: 3rem;
  background-image: -webkit-linear-gradient(180deg, #e70faa, #00c0fd);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const ContainerRedes = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-around;
  @media screen and (min-device-width: 30em) and (max-device-width: 58.5em) {
    flex-direction: column;
    width: 15%;
  }
  @media screen and (max-device-width: 30em) {
    flex-direction: column;
    width: 15%;
  }
`;
