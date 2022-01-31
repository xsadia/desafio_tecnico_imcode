import { HeaderLink } from "../HeaderLink";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLinkContainer>
        <HeaderLink isActive>Início</HeaderLink>
        <HeaderLink>Projeto</HeaderLink>
        <HeaderLink>Contato</HeaderLink>
        <HeaderLink>Equipe</HeaderLink>
      </S.HeaderLinkContainer>
    </S.HeaderContainer>
  );
};
