import styled from "styled-components";

type ContainerProps = {
  color: string;
  height: number;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 180px;
  width: 50%;
  border-radius: 0 50px 50px 0;
  background: ${(props) => props.color};
  color: #fff;
  height: ${(props) => props.height}px;
`;
