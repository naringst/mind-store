import React, { useState } from "react";
import { styled } from "styled-components";
import { AiOutlinePushpin, AiTwotonePushpin } from "react-icons/ai";
import { Tag } from "../components/Modal/Modal.styles";
import { NoteType } from "../types/NoteType";

import { useDispatch } from "react-redux";
import { noteActions } from "../store/note";
import parse from "html-react-parser";
import { getEachButton } from "../utils/getEachButton";

export default function Note(newNote: NoteType) {
  const [isPinned, setIspinned] = useState<boolean>(newNote.pinned);
  const dispatch = useDispatch();
  const type = "archive";
  return (
    <NoteDiv id={newNote.id} color={newNote.color}>
      <BottomDiv>
        {newNote.title.length > 8 ? (
          <NoteTitle>{newNote.title.substring(0, 7)}..</NoteTitle>
        ) : (
          <NoteTitle>{newNote.title}</NoteTitle>
        )}
        <FlexDiv>
          <Priority>{newNote.priority}</Priority>
          <Pin
            id={newNote.id}
            onClick={(e: any) => {
              setIspinned(!isPinned);
              dispatch(noteActions.setPinState([newNote.id, !isPinned]));
            }}
          >
            {isPinned ? <AiTwotonePushpin /> : <AiOutlinePushpin />}
          </Pin>
        </FlexDiv>
      </BottomDiv>
      <Div>
        {parse(newNote.content) ? (
          <P>{parse(newNote.content)} </P>
        ) : (
          <P>{parse(newNote.content)} </P>
        )}
      </Div>
      <Div>
        {newNote.tags.map((eachTag: string) => {
          return <Tag>{eachTag}</Tag>;
        })}
      </Div>
      <BottomDiv>{getEachButton(type, newNote, dispatch)}</BottomDiv>
    </NoteDiv>
  );
}

const NoteDiv = styled.div`
  width: 260px;
  height: 220px;
  border-radius: 10px;
  background: ${(props) => props.color};
  padding: 12px 20px;
  box-shadow: -1px 1px 1px 2px #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-between;
`;
const Priority = styled.h3`
  font-size: 14px;
  margin: 0 5px;
  font-weight: 400;
`;

const Pin = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const NoteTitle = styled.h2`
  font-size: 24px;
`;

const P = styled.p`
  height: max-content;
  word-wrap: break-word;
  padding-bottom: 10px 0;
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  align-items: center;
`;

const Div = styled.div`
  margin: 5px 0;
`;
