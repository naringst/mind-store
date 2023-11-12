import React from "react";
import { styled } from "styled-components";
import { AiOutlinePushpin, AiTwotonePushpin } from "react-icons/ai";
import { Tag } from "../Modal/Modal.styles";
import { NoteType } from "../types/NoteType";
import {
  AiOutlineFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { noteActions } from "../../store";

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
  const dispatch = useDispatch();
  const noteEditHandler = (e: any) => {
    //노드 수정
    //노트 모달 켜고 켠 노트 모달에 원래 내용 담아서 ..
  };
  const DeleteNoteHandler = (e: any) => {
    //노트 삭제
    dispatch(noteActions.deleteNote(e.target.id));
  };

  const archivingNoteHandler = (e: any) => {
    //아카이빙에 저장
  };
  return (
    <NoteDiv id={id} color={color}>
      <BottomDiv>
        <NoteTitle>{title}</NoteTitle>
        <FlexDiv>
          <Priority>{priority}</Priority>
          <Pin>
            {pinned && <AiOutlinePushpin />}
            <AiTwotonePushpin />
          </Pin>
        </FlexDiv>
      </BottomDiv>
      <Div>
        <P>자리를 바꿨는데 1분단 제일 앞자리가 내 자리가 되었다. </P>
      </Div>
      <Div>
        {tags.map((tag: string) => {
          return <Tag>{tag}</Tag>;
        })}
      </Div>
      <BottomDiv>
        <CreatedTimeP>{createdTime}</CreatedTimeP>
        <IconsDiv>
          <StyledAiOutlineEdit size="25px" id={id} onClick={noteEditHandler} />
          <StyledAiOutlineFolderOpen
            id={id}
            size="25px"
            onClick={DeleteNoteHandler}
          />
          <StyledAiOutlineDelete
            id={id}
            size="25px"
            onClick={archivingNoteHandler}
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
