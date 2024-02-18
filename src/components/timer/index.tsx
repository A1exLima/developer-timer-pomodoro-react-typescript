import { Container, BoxTimer} from "./style"

import { StartAndStopButton } from "../startAndStopButton"
import { InputData } from "../../components/inputData"

import { TbPointFilled } from "react-icons/tb";

import { useEffect, useState } from "react";

export function Timer(){
  const[runningTimer, setRunningTimer] = useState(false)

  const[valueOfTenOfSeconds, setValueOfTenOfSeconds] = useState(0)
  const[unitValueOfSeconds, setUnitValueOfSeconds] = useState(0)

  const[valueOfTenOfMinutes, setValueOfTenOfMinutes] = useState(0)
  const[unitValueOfMinutes, setUnitValueOfMinutes] = useState(0)

  const stopTheTimer = [valueOfTenOfSeconds, unitValueOfSeconds, valueOfTenOfMinutes, unitValueOfMinutes]
    .every(checkSequence => checkSequence === 0);
  
  const secondsIsReset = [unitValueOfSeconds, valueOfTenOfSeconds]
    .every(checkSequence => checkSequence === 0)

  function setTimer(value: number) {
    const unit = value % 10; 
    const ten = Math.floor(value / 10); 
    
    setUnitValueOfMinutes(unit);
    setValueOfTenOfMinutes(ten);
  }

  function startOrStopTimer(){
    setRunningTimer(prevState => !prevState)

    if(runningTimer){
      resetTimerValues()
    }
  }

  function resetTimerValues(){
    setUnitValueOfSeconds(0)
    setValueOfTenOfSeconds(0)
  }

  useEffect(()=>{ // timer Seconds
    let timerId: number

    if(runningTimer){
      if(secondsIsReset){
        setUnitValueOfSeconds(9)
        setValueOfTenOfSeconds(5)
      }

      timerId = setInterval(() => {

        setUnitValueOfSeconds((prevStateUnitValueOfSeconds) => {
          if (prevStateUnitValueOfSeconds === 0){
            setValueOfTenOfSeconds((prevStateValueOfTenOfSeconds) => {
              if (prevStateValueOfTenOfSeconds === 0){
                return 5
              } else {
                return prevStateValueOfTenOfSeconds -1
              }
            })
            return 9
          } else {
            return prevStateUnitValueOfSeconds -1
          }
        })
      }, 1000);

      return () => clearInterval(timerId);
    }

  },[runningTimer])

  useEffect(()=>{ // timer minutes
    if(stopTheTimer){
      setRunningTimer(false)

    } else {
      if (valueOfTenOfSeconds === 0 && unitValueOfSeconds === 0) {
        setUnitValueOfMinutes((prevStateUnitValueOfMinutes) => {
          if (prevStateUnitValueOfMinutes === 0) {
            setValueOfTenOfMinutes((prevStateValueOfTenOfMinutes) => {
              if( prevStateValueOfTenOfMinutes === 0){
                return 5
              } else {
                return prevStateValueOfTenOfMinutes - 1
              }
            })
            return 9
          } else {
            return prevStateUnitValueOfMinutes -1
          }
        })
      }
    }

  },[runningTimer, valueOfTenOfSeconds, unitValueOfSeconds])

  
  return(
    <Container>
      <InputData
        onSetTimer={setTimer}
        status={runningTimer}
      />

      <BoxTimer>
        <li>{valueOfTenOfMinutes}</li>
        <li>{unitValueOfMinutes}</li>
        <li className="point">
          <TbPointFilled />
          <TbPointFilled />
        </li>
        <li>{valueOfTenOfSeconds}</li>
        <li>{unitValueOfSeconds}</li>
      </BoxTimer>
      
      <StartAndStopButton
        onClick={startOrStopTimer}
        status={runningTimer}
        type="button"
        disabled={stopTheTimer && !runningTimer}
      />
    </Container>
  )
}