import React from "react";
import { styled } from "styled-components";

export default function Sidebar() {
  return (
    <SideDiv>
      <h1>keep</h1>
      <ul>
        <li>Notes</li>
        <li>Tags1</li>
        <li>Tags2</li>
        <li>Edit Notes</li>
        <li>Archive</li>
        <li>Trash</li>
      </ul>
    </SideDiv>
  );
}

const SideDiv = styled.div`
  width: 100%;
  background-color: yellow;

  grid-area: Sidebar;
`;
