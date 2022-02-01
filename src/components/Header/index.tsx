import { HeaderLink } from "../HeaderLink";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLinkContainer>
        <HeaderLink isActive href="#inicio">
          Início
        </HeaderLink>
        <HeaderLink href="#projeto">Projeto</HeaderLink>
        <HeaderLink href="#contato">Contato</HeaderLink>
        <HeaderLink href="#equipe">Equipe</HeaderLink>
      </S.HeaderLinkContainer>
    </S.HeaderContainer>
  );
};
