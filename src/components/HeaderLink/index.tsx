import { ReactNode } from "react";
import * as S from "./styles";

type HeaderLinkProps = {
  children: ReactNode;
  isActive?: boolean;
};

export const HeaderLink = ({ children, isActive }: HeaderLinkProps) => {
  return <S.Link isActive={isActive}>{children}</S.Link>;
};
