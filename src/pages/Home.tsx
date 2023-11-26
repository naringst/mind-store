import { styled } from "styled-components";
import Note from "./Note";
import { PagesContainer } from "./Pages.styles";
import { useDispatch, useSelector } from "react-redux";
import { NoteType } from "../types/NoteType";
import { sortModalActions } from "../store";
import { useEffect, useState } from "react";

export default function Home() {
  let NoteList = useSelector((state: any) => state.note.noteList);
  const [userInput, setUserInput] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchNoteList, setSearchNoteList] = useState<NoteType[]>(NoteList);
  const dispatch = useDispatch();

  const openSortModal = (e: any) => {
    dispatch(sortModalActions.openSortModal());
  };

  const searchNoteChange = (e: any) => {
    if (e.target.value.length === 0) {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }
    setUserInput(e.target.value);
    setSearchNoteList(
      NoteList.filter((item: any) => item.title.includes(e.target.value))
    );
  };

  useEffect(() => {}, [NoteList]);

  return (
    <PagesContainer>
      <div style={{ width: "100%" }}>
        <NoteSearchInput
          placeholder="노트의 제목을 입력해주세요"
          onChange={searchNoteChange}
          value={userInput}
        />
      </div>
      <SortButton onClick={openSortModal}>정렬</SortButton>

      {isSearching ? (
        <div>
          <SearchingSpan>"{userInput}" 검색 결과</SearchingSpan>
          <NoteGrid>
            {searchNoteList.map((note: NoteType) => {
              return (
                <Note
                  id={note.id}
                  title={note.title}
                  content={note.content}
                  priority={note.priority}
                  pinned={note.pinned}
                  tags={note.tags}
                  createdTime={note.createdTime}
                  color={note.color}
                ></Note>
              );
            })}
          </NoteGrid>
        </div>
      ) : (
        <NoteGrid>
          {NoteList.map((note: NoteType) => {
            return (
              <Note
                id={note.id}
                title={note.title}
                content={note.content}
                priority={note.priority}
                pinned={note.pinned}
                tags={note.tags}
                createdTime={note.createdTime}
                color={note.color}
              ></Note>
            );
          })}
        </NoteGrid>
      )}
    </PagesContainer>
  );
}

const NoteSearchInput = styled.input`
  padding: 2px 10px;

  width: 100%;
  height: 40px;
  border: 1px solid #d9d9d9;
  box-shadow: 0 5px 2px -2px #d9d9d9;
  border-radius: 5px;
  margin: 10px 0;

  @media screen and (max-width: 1016px) {
    margin: 20px 0px;
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
  cursor: pointer;
`;

const SearchingSpan = styled.span`
  margin-bottom: 30px;
  padding-bottom: 30px;
`;

export const NoteGrid = styled.div`
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
