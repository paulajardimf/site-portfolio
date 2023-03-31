import {
  ContainerCargo,
  ContainerColumn,
  ContainerLocal,
  ContainerPai,
  ContainerRow,
  Info,
  LinhaHorizontal,
  SubTitulo,
  Tipo,
} from "./styled";
import Icon from "./assets/icon.svg";
import Calendario from "./assets/calendar_dates.svg";

export default function Cargo(props) {
  return (
    <>
      <ContainerPai>
        <ContainerRow>
          <ContainerColumn>
            <ContainerCargo>
              <SubTitulo>{props.curso}</SubTitulo>
              <Tipo>{props.tipo}</Tipo>
            </ContainerCargo>
            <ContainerCargo>
              <ContainerLocal>
                <Info>
                  <img src={Icon} alt="ícone" />
                  {props.instituicao}
                </Info>
              </ContainerLocal>
              <Info>
                <img src={Calendario} alt="ícone" /> {props.data}
              </Info>
            </ContainerCargo>
          </ContainerColumn>
        </ContainerRow>
        <p className="info">{props.info}</p>
      </ContainerPai>
      <LinhaHorizontal></LinhaHorizontal>
    </>
  );
}
