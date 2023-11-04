import { styled } from "styled-components";
import Note from "./Note";

export default function Home() {
  return (
    <Div>
      <NoteSearchInput placeholder="노트의 제목을 입력해주세요" />
      <SortButton>정렬</SortButton>
      <NoteGrid>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
        <Note></Note>
      </NoteGrid>
    </Div>
  );
}

const Div = styled.div`
  width: 88%;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  justify-content: center;
`;
const NoteSearchInput = styled.input`
  padding: 2px 10px;
  margin: 0px 100px 0px 10px;
  width: 100%;
  height: 40px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 5px 2px -2px #d9d9d9;
  border-radius: 5px;
  margin: 10px 0;
`;

const SortButton = styled.button`
  margin: 10px -20px 0px 10px;
  width: 60px;
  height: 40px;
  background: #fff0ba;
  border: none;
  border-radius: 5px;
  margin-left: auto;
`;

const NoteGrid = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
