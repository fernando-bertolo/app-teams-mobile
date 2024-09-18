import * as S from "./style";
import logoImg from "@assets/logo.png"
import { CaretLeft } from "phosphor-react-native";

export function Header() {
  return (
    <S.Container>
      <S.Logo source={logoImg} />
      <CaretLeft/>
    </S.Container>
  )
}