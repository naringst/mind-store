import React from "react";
import { styled } from "styled-components";

export default function Header() {
  const title: string = "title";

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <Button>+</Button>
      <Button>-</Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 55px;
  width: 100%;
  padding: 10px;
  z-index: -1;
  grid-area: Header;
  display: flex;
  box-shadow: 0px 10px 5px -2px gray;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: yellow;
  border-radius: 5px;
`;
