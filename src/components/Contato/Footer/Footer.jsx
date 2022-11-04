import { ContainerFooter, Creditos, LinhaHorizontal } from "./styled";

export default function Footer() {
  return (
    <ContainerFooter>
      <LinhaHorizontal></LinhaHorizontal>
      <Creditos>
        Design base:{" "}
        <a
          href="https://www.figma.com/file/FIUAyjPnWjD3ojRaKgyVix/Developer-Portfolio-Design-(Community)?node-id=0%3A1"
          target="_blank"
          rel="noopener noreferrer"
        >
          pavanmg
        </a>
      </Creditos>
    </ContainerFooter>
  );
}
