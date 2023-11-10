import React, { useState } from "react";
import Modal from "./Modal";
import { CreateButton, TagModalDiv } from "./Modal.styles";
import { useDispatch, useSelector } from "react-redux";
import { DeleteButton, Li, ListDiv, Span } from "./EditTagModal";
import { addedTagsActions, tagModalActions } from "../../store";
import styled from "styled-components";

export default function AddTagModal() {
  const dispatch = useDispatch();
  const tagList = useSelector((state: any) => state.tag.tagList);

  const addedTagList = useSelector((state: any) => state.addedTag.addedTagList);
  const closeAddTagModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagModalActions.closeAddTagModal());
  };
  const selectTag = (e: any) => {
    e.preventDefault();
    if (addedTagList.includes(e.target.name) === false) {
      dispatch(addedTagsActions.addTag(e.target.name));
    }
    console.log(addedTagList);
  };

  const deleteTag = (e: any) => {
    e.preventDefault();
    if (addedTagList.includes(e.target.id) === true) {
      dispatch(addedTagsActions.deleteTag(e.target.name));
    }
    console.log(addedTagList);
  };
  return (
    <Modal>
      <TagModalDiv>
        <CreateButton onClick={closeAddTagModalHandler}>x</CreateButton>
        <h3>태그 추가</h3>

        <TagListDiv>
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
                      onClick={selectTag}
                    >
                      +
                    </DeleteButton>
                  </ListDiv>
                </Li>
              );
            })}
          </ul>
        </TagListDiv>
        <TagBox>
          {addedTagList.map((tag: any) => {
            return (
              <Tag id={tag} onClick={deleteTag}>
                {tag}
              </Tag>
            );
          })}
        </TagBox>
        <CompleteButton onClick={closeAddTagModalHandler}>저장</CompleteButton>
      </TagModalDiv>
    </Modal>
  );
}

const TagBox = styled.div`
  margin: 25px 0;
`;

const Tag = styled.span`
  padding: 5px;
  color: gray;
  background: #d9d9d9;
  border-radius: 5px;
  margin: 10px 5px;
  font-size: 14px;
  cursor: pointer;
`;

const CompleteButton = styled.button`
  width: max-content;
  height: 30px;
  padding: 5px 10px;
  float: right;
  border: none;
  background: #fff0ba;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #efe6cc;
  }
`;

const TagListDiv = styled.div`
  margin: 25px 0;
`;
