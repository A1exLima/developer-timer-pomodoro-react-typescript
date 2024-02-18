import { useEffect, useState } from "react";
import { Container, Cont} from "./style"
import { FaPlus, FaMinus } from "react-icons/fa";

interface InputDataProps {
  onSetTimer: (value: number) => void
  status: boolean
}

export function InputData({onSetTimer, status}: InputDataProps){
  const[timeCounter, setTimeCounter] = useState(0)

  function handleIncrementButton(){
    if(timeCounter < 60){
      setTimeCounter(prevState => prevState + 1)
    }
  }

  function handleDecrementButton(){
    if(timeCounter > 0){
      setTimeCounter(prevState => prevState - 1)
    }
  }

  useEffect(()=>{ // set timer
    onSetTimer(timeCounter)
  },[timeCounter])

  useEffect(()=>{ // reset counter
    if(!status){
      setTimeCounter(0)
    }
  },[status])

  return(
    <Container>
      <div>
        <p>Vou trabalhar em:</p>

        <input 
          type="text" 
          placeholder="Dê um nome para o seu projeto "
        />
      </div>

      <div>
        <p>Durante</p>

        <Cont $disabled={status}>
          <button
            type="button"
            disabled={status}
            onClick={handleDecrementButton}
          >
            <FaMinus />
          </button>

          <p>{String(timeCounter).padStart(2,"0")}</p>

          <button
            type="button"
            disabled={status}
            onClick={handleIncrementButton}
          >
            <FaPlus />
          </button>
        </Cont>

        <p>minutos.</p>
      </div>
    </Container>
  )
}