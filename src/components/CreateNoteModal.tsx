import "react-quill/dist/quill.snow.css";
import Editor from "./Editor";
import { styled } from "styled-components";

export default function CreateNoteModal() {
  return (
    <ModalBackdrop>
      <ModalDiv>
        <h1>노트 생성하기</h1>
        <input></input>
        <StyledEditor />
      </ModalDiv>
    </ModalBackdrop>
  );
}

const ModalDiv = styled.div`
  width: 70%;
  height: 500px;
  z-index: 200;
  background: white;
`;

const StyledEditor = styled(Editor)`
  width: 100%;
  height: 500px;
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
