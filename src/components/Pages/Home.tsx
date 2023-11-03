import React from "react";
import { styled } from "styled-components";
import Note from "./Note";

export default function Home() {
  return (
    <HomeDiv>
      <NoteSearchInput placeholder="노트의 제목을 입력해주세요" />
      <SortButton>정렬</SortButton>
      <NoteGrid>
        <Note></Note>
        <Note></Note>
      </NoteGrid>
    </HomeDiv>
  );
}

const HomeDiv = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
`;

const NoteSearchInput = styled.input`
  padding: 2px 10px;
  width: 80%;
  height: 40px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 5px 2px -2px #d9d9d9;
  border-radius: 5px;
  margin: 10px 0;
`;

const SortButton = styled.button`
  margin: 10px 0;
  width: 60px;
  height: 30px;
  background: #fff0ba;
  border: none;
  border-radius: 5px;
  margin-left: auto;
`;

const NoteGrid = styled.div`
  display: grid;
`;
