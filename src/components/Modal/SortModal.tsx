import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { CreateButton, TagModalDiv } from "./Modal.styles";
import { sortModalActions } from "../../store";
import { styled } from "styled-components";

export default function SortModal() {
  const dispatch = useDispatch();
  const closeSortModalHandler = (e: any) => {
    dispatch(sortModalActions.closeSortModal());
  };
  return (
    <Modal>
      <TagModalDiv>
        <CreateButton onClick={closeSortModalHandler}>x</CreateButton>
        <h3>정렬</h3>
        <Div>
          <H4>우선순위 </H4>

          <div>
            <StyledLabel htmlFor="lowFirst">
              <RadioInput type="radio" name="sort" id="lowFirst" />
              낮은 우선순위부터
            </StyledLabel>
          </div>

          <div>
            <StyledLabel htmlFor="highFirst">
              <RadioInput type="radio" name="sort" id="highFirst" />
              높은 우선순위부터
            </StyledLabel>
          </div>
          <H4>생성 날짜 </H4>
          <div>
            <StyledLabel htmlFor="latest">
              <RadioInput type="radio" name="sort" id="latest" />
              최신순
            </StyledLabel>
          </div>
          <div>
            <StyledLabel htmlFor="oldest">
              <RadioInput type="radio" name="sort" id="oldest" checked />
              오래된 순
            </StyledLabel>
          </div>
        </Div>
      </TagModalDiv>
    </Modal>
  );
}

const StyledLabel = styled.label`
  line-height: 30px;
`;

const H4 = styled.h4`
  padding: 15px 0 5px 0;
`;
const Div = styled.div``;

const RadioInput = styled.input`
  margin-right: 5px;
`;
