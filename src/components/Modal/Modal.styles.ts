import { styled } from "styled-components";

export const CreateButton = styled.button`
  float: right;
  width: max-content;
  height: 30px;
  padding: 5px 10px;
  border: none;
  background: #fff0ba;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #efe6cc;
  }
`;

export const TagModalDiv = styled.div`
  padding: 30px 40px;
  width: 300px;
  height: 300px;
  z-index: 4;
  background: white;
  border-radius: 5px;
  overflow: scroll;
  margin: 0 auto;
`;

export const Tag = styled.button`
  padding: 5px;
  color: gray;
  background: white;
  border-radius: 5px;
  margin: 10px 5px;
  box-shadow: -1px 1px 1px 2px #d9d9d9;
  font-size: 14px;
  cursor: pointer;
  border: none;
`;
