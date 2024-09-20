import * as S from "./style";
import logoImg from "@assets/logo.png"

type HeaderProps = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <S.Container>
      {
        showBackButton && (
          <S.BackButton>
            <S.BackIcon />
          </S.BackButton>
        )
      }
      <S.Logo source={logoImg} />
    </S.Container>
  )
}