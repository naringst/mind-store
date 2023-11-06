import { styled } from "styled-components";
import Note from "./Note";

export default function Home() {
  return (
    <Div>
      <div style={{ width: "100%" }}>
        <NoteSearchInput placeholder="노트의 제목을 입력해주세요" />
      </div>
      <SortButton>정렬</SortButton>
      <NoteGrid>
        <Note title="1"></Note>
        <Note title="2"></Note>
        <Note title="rk"></Note>
        <Note title="rk"></Note>
      </NoteGrid>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 100px;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  justify-content: center;
  margin-right: 100px;

  @media screen and (max-width: 960) {
    width: 100%;
  }
`;

const NoteSearchInput = styled.input`
  padding: 2px 10px;
  width: 100%;
  height: 40px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 5px 2px -2px #d9d9d9;
  border-radius: 5px;
  margin: 10px 0;

  @media screen and (max-width: 1016px) {
    margin: 20px 80px;
  }
`;

const SortButton = styled.button`
  margin: 10px 0 0px 10px;
  width: 60px;
  height: 40px;
  background: #fff0ba;
  border: none;
  border-radius: 5px;
  margin-left: auto;
`;

const NoteGrid = styled.div`
  width: 100%;
  margin: 40px 0;

  display: grid;
  padding-right: 0;
  margin-right: 0;

  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(4, 1fr);
  justify-content: stretch;
  grid-auto-flow: row;
  gap: 30px;

  @media screen and (max-width: 1380px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
