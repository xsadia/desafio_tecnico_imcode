import styled, { css } from "styled-components";

type LinkProps = {
  isActive?: boolean;
};

export const Link = styled.a<LinkProps>`
  display: block;
  color: #000;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  font-size: 17px;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 2px solid var(--turquoise);
    `}

  &:hover {
    border-bottom: 2px solid var(--turquoise);
  }
`;
