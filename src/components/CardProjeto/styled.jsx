import styled from "styled-components";

export const Card = styled.section`
  width: 373px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
`;
export const ImagemProjeto = styled.img`
  width: 373px;
  border-radius: 20px 20px 0 0;
`;

export const DadosProjeto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 5px 20px;
`

export const TituloProjeto = styled.h3`
  font-weight: 500;
  font-size: 1.25rem;
  color: #373737;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextoProjeto = styled.p`
  font-weight: 300;
  font-size: 1.10rem;
`;

export const Tecnologias = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #373737;
`;

export const LinhaLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

export const ContainerLinks = styled.div`
  display: flex;

  img{
    margin-right: 5px;
  }
`;
