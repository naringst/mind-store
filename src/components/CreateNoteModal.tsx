import "react-quill/dist/quill.snow.css";
import Editor from "./Editor";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { modalActions } from "../store";

export default function CreateNoteModal() {
  const dispatch = useDispatch();
  const closeModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(modalActions.closeModal());
  };

  return (
    <ModalBackdrop>
      <ModalDiv>
        <CreateButton onClick={closeModalHandler}>x</CreateButton>
        <div>
          <h1>노트 생성하기</h1>
        </div>
        <NoteNameInput></NoteNameInput>
        <StyledEditor />
        <BottomDiv>
          <button>태그 추가</button>
          <div>
            <Label htmlFor="background-color">배경 색</Label>
            <select id="background-color">
              <option value="white">흰색</option>
              <option value="red">빨간색</option>
              <option value="green">초록색</option>
              <option value="blue">파란색</option>
            </select>
          </div>
          <div>
            <Label htmlFor="background-color">우선순위</Label>
            <select>
              <option value="low">낮음</option>
              <option value="high">높음</option>
            </select>
          </div>
        </BottomDiv>
        <CreateButton>생성하기</CreateButton>
      </ModalDiv>
    </ModalBackdrop>
  );
}

const ModalDiv = styled.div`
  padding: 30px;
  width: 700px;
  height: 700px;
  z-index: 200;
  background: white;
`;
const NoteNameInput = styled.input`
  width: 660px;
  height: 20px;
  margin: 10px 0;
`;
const StyledEditor = styled(Editor)`
  width: 660px;
  height: 300px;
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
const BottomDiv = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.button`
  float: right;
`;
