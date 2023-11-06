import React from "react";
import { styled } from "styled-components";
import { AiOutlinePushpin, AiTwotonePushpin } from "react-icons/ai";

type NoteType = {
  title: string;
};
export default function Note(props: NoteType) {
  return (
    <NoteDiv>
      <BottomDiv>
        <NoteTitle>{props.title}</NoteTitle>
        <FlexDiv>
          <Priority>HIGH</Priority>
          <Pin>
            <AiOutlinePushpin />
            <AiTwotonePushpin />
          </Pin>
        </FlexDiv>
      </BottomDiv>
      <Div>
        <P>
          contsdfsfdsafdslkfjalkdjflk
          asjasdfasdfjalksdfjalskdjflkasjldkfjalskjflkajlsdkfjldsents
        </P>
      </Div>
      <Div>
        <Tag>태그</Tag>
      </Div>
      <BottomDiv>
        <Div>생성시간</Div>
        <IconsDiv>
          <p>icons</p>
          <p>icons</p>
          <p>icons</p>
        </IconsDiv>
      </BottomDiv>
    </NoteDiv>
  );
}

const NoteDiv = styled.div`
  width: 260px;
  height: 220px;
  border-radius: 10px;
  background: pink;
  padding: 12px 20px;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-between;
`;
const Priority = styled.h3`
  font-size: 14px;
  margin: 0 5px;
  font-weight: 400;
`;

const Pin = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const NoteTitle = styled.h2`
  font-size: 24px;
`;

const P = styled.p`
  height: max-content;
  word-wrap: break-word;
  padding-bottom: 10px 0;
`;
const IconsDiv = styled.div`
  display: flex;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  align-items: center;
`;

const Tag = styled.span`
  background: #d9d9d9;
  border-radius: 5px;
  font-size: 16px;
  padding: 3px;
  color: #a9a9a9;
  margin: 5px 0;
`;

const Div = styled.div`
  margin: 5px 0;
`;
