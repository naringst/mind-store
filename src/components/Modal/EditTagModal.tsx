import { useDispatch } from "react-redux";
import { tagModalActions } from "../../store";
import styled from "styled-components";
import Modal from "./Modal";
import { CreateButton, TagModalDiv } from "./Modal.styles";
import { tagActions } from "../../store/tag";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { v4 as uuidv4 } from "uuid";

export default function EditTagModal() {
  const [inputText, setInputText] = useState<string>("");
  const [id, setId] = useState<number>(0);

  const tagList = useSelector((state: any) => state.tag.tagList);

  const dispatch = useDispatch();
  const closeTagModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagModalActions.closeTagModal());
  };

  const addTagHandler = (e: any) => {
    if (e.key === "Enter") {
      const newId = uuidv4();
      console.log(newId);
      console.log(typeof newId);
      dispatch(tagActions.createNewTag({ id: uuidv4(), name: inputText }));

      setInputText("");
    }
  };

  const DeleteTagHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagActions.deleteTag(e.target.id));
    console.log(e.target.id);
    console.log(e.target.name);
  };

  return (
    <Modal>
      <TagModalDiv>
        <CreateButton onClick={closeTagModalHandler}>x</CreateButton>
        <div>
          <h3>태그 수정</h3>

          <Input
            placeholder="새 태그 입력 ... "
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => addTagHandler(e)}
          />

          {/* 기존 태그 렌더링 */}
          <ul>
            {tagList.map((tag: any) => {
              return (
                <Li>
                  <ListDiv>
                    <Span>{tag.name}</Span>
                    <DeleteButton
                      id={tag.id}
                      name={tag.name}
                      onClick={DeleteTagHandler}
                    >
                      x
                    </DeleteButton>
                  </ListDiv>
                </Li>
              );
            })}
          </ul>
        </div>
      </TagModalDiv>
    </Modal>
  );
}

const Input = styled.input`
  margin: 20px 0;
  clear: both;
  width: 205px;
  height: 30px;
  border: none;
  border-bottom: 2px solid #a8a8a8;
  cursor: pointer;
  padding: 5px 10px;
`;
export const Span = styled.span`
  line-height: 30px;
`;
export const ListDiv = styled.div`
  line-height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const Li = styled.li`
  list-style-type: none;
  height: max-content;
  margin: 10px 0;
`;

export const DeleteButton = styled.button`
  margin-left: 10px;
  border: none;
  padding: 0px 10px;
  border-radius: 5px;
`;
