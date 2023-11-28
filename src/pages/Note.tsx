import React, { useState } from "react";
import { styled } from "styled-components";
import { AiOutlinePushpin, AiTwotonePushpin } from "react-icons/ai";
import { Tag } from "../components/Modal/Modal.styles";
import { NoteType } from "../types/NoteType";
import {
  AiOutlineFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { noteActions } from "../store/note";
import parse from "html-react-parser";
import { modalActions } from "../store";
import { trashActions } from "../store/trash";
import { archiveActions } from "../store/archive";

export default function Note({
  id,
  title,
  priority,
  pinned,
  content,
  tags,
  createdTime,
  color,
}: NoteType) {
  const [isPinned, setIspinned] = useState<boolean>(pinned);
  const dispatch = useDispatch();

  const updateNote = (e: any) => {
    dispatch(modalActions.toggleModal(true));
    dispatch(noteActions.updateNote(e.target.id));
    //isEdit으로 바꾸고
    //해당 노트를 보내
  };
  const DeleteNoteHandler = (e: any) => {
    //노트 삭제
    dispatch(noteActions.deleteNote(e.target.id));
    dispatch(
      trashActions.addTrash({
        id,
        title,
        priority,
        pinned,
        content,
        tags,
        createdTime,
        color,
      })
    );
  };

  const archivingNoteHandler = (e: any) => {
    //아카이빙에 저장
    dispatch(noteActions.deleteNote(e.target.id));
    dispatch(
      archiveActions.addArchive({
        id,
        title,
        priority,
        pinned,
        content,
        tags,
        createdTime,
        color,
      })
    );
  };

  console.log(parse(content));
  const symbolProperties = Object.getOwnPropertySymbols(parse(content));
  console.log(symbolProperties);
  console.log(typeof parse(content));

  return (
    <NoteDiv id={id} color={color}>
      <BottomDiv>
        {title.length > 8 ? (
          <NoteTitle>{title.substring(0, 7)}..</NoteTitle>
        ) : (
          <NoteTitle>{title}</NoteTitle>
        )}
        <FlexDiv>
          <Priority>{priority}</Priority>
          <Pin
            id={id}
            onClick={(e: any) => {
              setIspinned(!isPinned);
              dispatch(noteActions.setPinState([id, !isPinned]));
            }}
          >
            {isPinned ? <AiTwotonePushpin /> : <AiOutlinePushpin />}
          </Pin>
        </FlexDiv>
      </BottomDiv>
      <Div>
        {parse(content) ? <P>{parse(content)} </P> : <P>{parse(content)} </P>}
      </Div>
      <Div>
        {tags.map((tag: string) => {
          return <Tag>{tag}</Tag>;
        })}
      </Div>
      <BottomDiv>
        <CreatedTimeP>{createdTime.toLocaleString()}</CreatedTimeP>
        <IconsDiv>
          <StyledAiOutlineEdit size="25px" id={id} onClick={updateNote} />
          <StyledAiOutlineFolderOpen
            id={id}
            size="25px"
            onClick={archivingNoteHandler}
          />
          <StyledAiOutlineDelete
            id={id}
            size="25px"
            onClick={DeleteNoteHandler}
          />
        </IconsDiv>
      </BottomDiv>
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
const IconsDiv = styled.div`
  display: flex;
  width: max-content;
  justify-content: space-between;
`;

const StyledAiOutlineEdit = styled(AiOutlineEdit)`
  margin: 0 3px;
`;

const StyledAiOutlineFolderOpen = styled(AiOutlineFolderOpen)`
  margin: 0 3px;
`;

const StyledAiOutlineDelete = styled(AiOutlineDelete)`
  margin: 0 3px;
`;
const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  align-items: center;
`;

const CreatedTimeP = styled.p`
  width: 100px;
  word-wrap: break-word;
`;

const Div = styled.div`
  margin: 5px 0;
`;
