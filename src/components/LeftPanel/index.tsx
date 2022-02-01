import { ReactNode } from "react";
import * as S from "./styles";

type LeftPanelProps = {
  children: ReactNode;
  color: string;
  height: number;
};

export const LeftPanel = ({ children, color, height }: LeftPanelProps) => {
  return (
    <S.Container color={color} height={height}>
      {children}
    </S.Container>
  );
};
