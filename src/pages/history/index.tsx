import { Container, Main, Article, Content, HistoryBox, TableHeader, TableContent } from "./style"

import { Header } from "../../components/header"
import { TaskReport } from "../../components/taskReport"


export function History(){
  return(
    <Container>
      <Main>
        <Header/>

        <Article>
          <Content>
            <h1>Meu histórico</h1>

            <HistoryBox>
              <TableHeader>
                <span>Tarefa</span>
                <span>Duração</span>
                <span>Início</span>
                <span>Status</span>
              </TableHeader>

              <TableContent>
                <TaskReport/>
                <TaskReport/>
              </TableContent>
            </HistoryBox>
          </Content>
        </Article>
      </Main>
    </Container>
  )
}