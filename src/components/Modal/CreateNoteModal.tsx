import "react-quill/dist/quill.snow.css";
import Editor from "./Editor";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { modalActions, tagModalActions } from "../../store";
import Modal from "./Modal";
import { useState } from "react";

export default function CreateNoteModal() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  //모달 닫기 버튼
  const closeModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(modalActions.closeModal());
  };

  //태그 모달 열기 버튼
  const openTagModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagModalActions.openTagModal());
  };

  //배경 색 설정
  const selectBackgroundColor = (e: any) => {
    setBackgroundColor(e.target.value);
    console.log(e.target.value);
  };

  //우선 순위 설정
  const selectPriority = (e: any) => {
    setPriority(e.target.value);
  };

  //노트 생성
  const createNewNote = () => {};
  return (
    <Modal>
      <ModalDiv>
        <CreateButton onClick={closeModalHandler}>x</CreateButton>
        <div>
          <h2>노트 생성하기</h2>
        </div>
        <NoteNameInput placeholder="제목을 입력하세요"></NoteNameInput>
        <Editor backgroundColor={backgroundColor} />
        <BottomDiv>
          <CreateButton onClick={openTagModalHandler}>태그 추가</CreateButton>
          <div>
            <Label htmlFor="background-color">배경 색</Label>
            <Select id="background-color" onChange={selectBackgroundColor}>
              <option value="white">흰색</option>
              <option value="red">빨간색</option>
              <option value="green">초록색</option>
              <option value="blue">파란색</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="background-color">우선순위</Label>
            <Select onChange={selectPriority}>
              <option value="low">낮음</option>
              <option value="high">높음</option>
            </Select>
          </div>
        </BottomDiv>
        <CreateButton onClick={createNewNote}>노트 생성</CreateButton>
      </ModalDiv>
    </Modal>
  );
}

const ModalDiv = styled.div`
  padding: 30px;
  width: 700px;
  height: 600px;
  z-index: 10;
  background: white;
  border-radius: 5px;
`;
const NoteNameInput = styled.input`
  width: 650px;
  height: 30px;
  margin: 10px 0;
  border: 1px solid #a8a8a8;
  border-radius: 5px;
  padding: 3px 10px;
`;

const Label = styled.label`
  margin: 0 5px;
`;

const Select = styled.select`
  padding: 0 3px;
  font-size: 16px;
  border-radius: 5px;
  outline: 0 none;
  background: #fff0ba;
  border: #d9d9d9;
  width: max-content;
  height: 30px;
`;
const BottomDiv = styled.div`
  margin: 60px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

const StyledEditor = styled(Editor)<{ backgroundColor: string }>`
  .ql-editor {
    height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`;

const CreateButton = styled.button`
  float: right;
  width: max-content;
  height: 30px;
  padding: 5px 10px;
  margin: 0;
  border: none;
  background: #fff0ba;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #efe6cc;
  }
`;
