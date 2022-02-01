import styled, { css } from "styled-components";

type ContainerProps = {
  color: string;
  height: number;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 0 50px 50px 0;
  background: ${(props) => props.color};
  color: #fff;
  height: ${(props) => props.height}px;
`;
