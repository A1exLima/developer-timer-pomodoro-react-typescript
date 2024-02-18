import { Container, Main, Content, Article} from "./style"

import { Header } from "../../components/header"
import { Timer } from "../../components/timer"

export function Home(){
  return(
    <Container>
      <Main>
        <Header/>
        <Article>
          <Content>
            <Timer/>
          </Content>
        </Article>
      </Main>
    </Container>
  )
}