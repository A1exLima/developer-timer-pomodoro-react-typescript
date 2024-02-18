import { Container} from "./style"

import brand from "../../assets/icon/brand.svg"
import { MdOutlineTimer } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export function Header(){
  return(
    <Container>
      <a href="#"> <img src={brand} alt="LogoTipo" /></a>
      <ul>
        <li><MdOutlineTimer /></li>
        <li><HiOutlineClipboardDocumentList /></li>
      </ul>
    </Container>
  )
}