import { ReactNode } from "react";
import * as S from "./styles";

type HeaderLinkProps = {
  children: ReactNode;
  isActive?: boolean;
  href: string;
};

export const HeaderLink = ({ children, isActive, href }: HeaderLinkProps) => {
  return (
    <S.Link href="" isActive={isActive}>
      {children}
    </S.Link>
  );
};
