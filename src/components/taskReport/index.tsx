import { Container } from "./style";

import { TbPointFilled } from "react-icons/tb";

export function TaskReport(){

  return(
    <Container>
      <span>Conserto de débitos técnicos e estruturas de filamento</span>
      <span>25 minutos</span>
      <span>Há cerca de 2 meses</span>
      <span className="task-status">
        <TbPointFilled />
        Concluído
      </span>
    </Container>
  )
}