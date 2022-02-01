import { ReactNode } from "react";
import * as S from "./styles";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <S.Container>{children}</S.Container>;
};
