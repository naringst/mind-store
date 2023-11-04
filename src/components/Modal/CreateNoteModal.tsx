import "react-quill/dist/quill.snow.css";
import Editor from "./Editor";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { modalActions, tagModalActions } from "../../store";
import Modal from "./Modal";

export default function CreateNoteModal() {
  const dispatch = useDispatch();
  const closeModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(modalActions.closeModal());
  };

  const openTagModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagModalActions.openModal());
    console.log("open");
  };

  return (
    <Modal>
      <ModalDiv>
        <CreateButton onClick={closeModalHandler}>x</CreateButton>
        <div>
          <h1>노트 생성하기</h1>
        </div>
        <NoteNameInput></NoteNameInput>
        <StyledEditor />
        <BottomDiv>
          <button onClick={openTagModalHandler}>태그 추가</button>
          <div>
            <Label htmlFor="background-color">배경 색</Label>
            <Select id="background-color">
              <option value="white">흰색</option>
              <option value="red">빨간색</option>
              <option value="green">초록색</option>
              <option value="blue">파란색</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="background-color">우선순위</Label>
            <Select>
              <option value="low">낮음</option>
              <option value="high">높음</option>
            </Select>
          </div>
        </BottomDiv>
        <CreateButton>생성하기</CreateButton>
      </ModalDiv>
    </Modal>
  );
}

const ModalDiv = styled.div`
  padding: 30px;
  width: 700px;
  height: 700px;
  z-index: 10;
  background: white;
`;
const NoteNameInput = styled.input`
  width: 660px;
  height: 30px;
  margin: 10px 0;
`;
const StyledEditor = styled(Editor)`
  width: 660px;
  height: 300px;
  background: red;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Label = styled.label`
  margin: 0 5px;
`;

const Select = styled.select`
  padding: 0 3px;
  font-size: 16px;
  border-radius: 5px;
  outline: 0 none;
  background: #d9d9d9;
  border: #d9d9d9;
  width: max-content;
  height: 30px;
`;
const BottomDiv = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.button`
  float: right;
`;
