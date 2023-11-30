import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { CreateButton, TagModalDiv } from "./Modal.styles";
import { sortModalActions } from "../../store";
import { styled } from "styled-components";
import { useState } from "react";
import { noteActions } from "../../store/note";

export default function SortModal() {
  const [selectData, setSelectData] = useState("");
  const dispatch = useDispatch();
  const closeSortModalHandler = (e: any) => {
    dispatch(sortModalActions.closeSortModal());
  };

  const handleChangeOption = (e: any) => {
    dispatch(sortModalActions.setSortOption(e.target.id));
    setSelectData(e.target.id);
    dispatch(noteActions.setSortCategory(e.target.id));
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
              <Radio
                type="radio"
                name="sort"
                id="lowFirst"
                onChange={handleChangeOption}
                checked={selectData === "lowFirst"}
              />
              낮은 우선순위부터
            </StyledLabel>
          </div>

          <div>
            <StyledLabel htmlFor="highFirst">
              <Radio
                type="radio"
                name="sort"
                id="highFirst"
                onChange={handleChangeOption}
                checked={selectData === "highFirst"}
              />
              높은 우선순위부터
            </StyledLabel>
          </div>
          <H4>생성 날짜 </H4>
          <div>
            <StyledLabel htmlFor="latest">
              <Radio
                type="radio"
                name="sort"
                id="latest"
                onChange={handleChangeOption}
                checked={selectData === "latest"}
              />
              최신순
            </StyledLabel>
          </div>
          <div>
            <StyledLabel htmlFor="oldest">
              <Radio
                type="radio"
                name="sort"
                id="oldest"
                onChange={handleChangeOption}
                checked={selectData === "oldest"}
              />
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

const Radio = styled.input`
  margin-right: 5px;
`;
