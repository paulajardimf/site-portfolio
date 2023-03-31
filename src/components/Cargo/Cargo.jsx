import {
  ContainerCargo,
  ContainerLocal,
  ContainerPai,
  Info,
  LinhaHorizontal,
  SubTitulo,
  Tipo,
} from "./styled";
import Icon from "./assets/icon.svg";
import Pin from "./assets/carbon_location.svg";
import Calendario from "./assets/calendar_dates.svg";

export default function Cargo(props) {
  return (
    <ContainerPai>
      <div>
        <ContainerCargo>
          <SubTitulo>{props.cargo}</SubTitulo>
          <Tipo>{props.tipo}</Tipo>
        </ContainerCargo>
        <ContainerCargo>
          <ContainerLocal>
            <Info>
              <img src={Icon} alt="ícone" />
              {props.local}
            </Info>
            <Info>
              <img src={Pin} alt="ícone" />
              {props.cidade}
            </Info>
          </ContainerLocal>
          <Info>
            <img src={Calendario} alt="ícone" /> {props.data}
          </Info>
        </ContainerCargo>
      </div>
      <p className="info">
        {props.info}
      </p>
      <LinhaHorizontal></LinhaHorizontal>
    </ContainerPai>
  );
}
