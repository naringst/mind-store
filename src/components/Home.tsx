import React from "react";
import { styled } from "styled-components";

export default function Home() {
  return <HomeDiv>Home</HomeDiv>;
}

const HomeDiv = styled.section`
  width: 100%;
  background: lightgray;
  grid-area: Home;
`;
