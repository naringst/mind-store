import { styled } from "styled-components";
import {
  AiOutlineFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineClose,
  AiOutlineRedo,
  AiOutlineExport,
} from "react-icons/ai";
import { modalActions } from "../store";
import { noteActions } from "../store/note";
import { archiveActions } from "../store/archive";
import { trashActions } from "../store/trash";
import { Dispatch } from "@reduxjs/toolkit";
import { NoteType } from "../types/NoteType";

export const getEachButton = (
  type: string,
  note: NoteType,
  dispatch: Dispatch
) => {
  const updateNote = (e: any) => {
    dispatch(modalActions.toggleModal(true));
    dispatch(noteActions.updateNote(e.target.id));
  };
  const archivingNoteHandler = (e: any) => {
    dispatch(noteActions.deleteNote(e.target.id));
    dispatch(archiveActions.addArchive(note));
  };

  const DeleteNoteHandler = (e: any) => {
    dispatch(noteActions.deleteNote(e.target.id));
    dispatch(trashActions.addTrash(note));
  };

  if (type === "archive") {
    return (
      <>
        <CreatedTimeP>{note.createdTime.toLocaleString()}</CreatedTimeP>
        <IconsDiv>
          {/* 전체 메모로 다시 내보내기 */}
          <AiOutlineExport
            id={note.id}
            size="25px"
            onClick={DeleteNoteHandler}
          />
          {/* 파일 삭제 */}
          <StyledAiOutlineDelete
            id={note.id}
            size="25px"
            onClick={DeleteNoteHandler}
          />
        </IconsDiv>
      </>
    );
  } else if (type === "trash") {
    return (
      <>
        <CreatedTimeP>{note.createdTime.toLocaleString()}</CreatedTimeP>
        <IconsDiv>
          {/* 복구 */}
          <AiOutlineRedo
            id={note.id}
            size="25px"
            onClick={archivingNoteHandler}
          />
          {/* 완전히 삭제 */}
          <AiOutlineClose size="25px" id={note.id} />
        </IconsDiv>
      </>
    );
  } else {
    return (
      <>
        <CreatedTimeP>{note.createdTime.toLocaleString()}</CreatedTimeP>
        <IconsDiv>
          <StyledAiOutlineEdit size="25px" id={note.id} onClick={updateNote} />
          <StyledAiOutlineFolderOpen
            id={note.id}
            size="25px"
            onClick={archivingNoteHandler}
          />
          <StyledAiOutlineDelete
            id={note.id}
            size="25px"
            onClick={DeleteNoteHandler}
          />
        </IconsDiv>
      </>
    );
  }
};

const CreatedTimeP = styled.p`
  width: 100px;
  word-wrap: break-word;
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
