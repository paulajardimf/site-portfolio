import styled from "styled-components";

export const ContainerPai = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;

  .info {
    display: flex;
    color: #666666;
    font-weight: 400;
    font-size: 1rem;
    width: 100%;
    margin: 5px 0;
    text-align: justify;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerCargo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerLocal = styled.div`
  display: flex;
  gap: 2vw;
  margin: 0.2rem 0;
`;

export const SubTitulo = styled.h4`
  color: #666666;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: 1px;
`;

export const Tipo = styled.button`
  border: none;
  height: 24px;
  width: 84px;
  font-size: 0.563rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: white;
  background: linear-gradient(45deg, #e70faa, #00c0fd);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 100px;
`;

export const Info = styled.p`
  color: #666666;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin: 0.2rem 0;

  img {
    margin-right: 5px;
  }
`;

export const LinhaHorizontal = styled.div`
  width: 100%;
  border: 1px solid #ebeaed;
  margin: 0.625rem 0;
`;
