import { styled } from "styled-components";

export const PagesContainer = styled.div`
  margin-bottom: 100px;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  justify-content: center;
  margin-right: 100px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
