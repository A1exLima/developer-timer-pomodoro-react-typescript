import { Button } from "./style"

import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineFrontHand } from "react-icons/md";

import { ButtonHTMLAttributes } from "react";

interface StartAndStopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status: boolean;
}

export function StartAndStopButton({status, ...rest}: StartAndStopButtonProps){
  return(
    <Button {...rest} $status={status}>
      {!status ? <IoPlayOutline /> : <MdOutlineFrontHand />}
      {!status ? "Começar" : "Interromper"} 
    </Button>
  )
}