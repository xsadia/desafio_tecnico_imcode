import styled, { css } from "styled-components";

type ContainerProps = {
  height: number;
  width: number;
};

type TextProps = {
  color: string;
  fontsize: number;
  maxWidth: number;
  bold?: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
    color: var(--turquoise);
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Text = styled.p<TextProps>`
  color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth}px;
  font-size: ${(props) => props.fontsize}rem;
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;
