import { useDispatch } from "react-redux";
import { tagModalActions } from "../../store";
import styled from "styled-components";
import Modal from "./Modal";

export default function TagModal() {
  const dispatch = useDispatch();
  const closeTagModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagModalActions.closeTagModal());
  };
  return (
    <Modal>
      <TagModalDiv>
        <button onClick={closeTagModalHandler}>x</button>
        <ul>
          <li>태그</li>
        </ul>
      </TagModalDiv>
    </Modal>
  );
}

export const TagModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 3; //위치지정 요소
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

const TagModalDiv = styled.div`
  padding: 30px;
  width: 300px;
  height: 300px;
  z-index: 4;
  background: white;
`;
