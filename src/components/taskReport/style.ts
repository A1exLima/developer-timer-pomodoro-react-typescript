import { styled } from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1.3fr 1fr;
  align-items: start;
  gap: 1rem;
  padding: 1.6rem 2.4rem;
  margin-bottom: .4rem;
  background-color: ${({theme})=> theme.COLORS.GRAY0};

  font-size: 1.4rem;
  color: ${({theme})=> theme.COLORS.GRAY6};
  line-height: 1.6;

  .task-status {
    display: flex;
    align-items: center;
    gap: .8rem;

    > svg {
      padding-bottom: .15rem;
      font-size: 1.8rem;
      color: ${({theme})=> theme.COLORS.GREEN};
    }
  }
`