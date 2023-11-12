import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineFolderOpen,
  AiOutlineForm,
  AiOutlineDelete,
  AiOutlineCloseCircle,
  AiOutlineTag,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { State, TagType, tagModalActions } from "../../store";

export default function Sidebar() {
  const dispatch = useDispatch();
  const openTagModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagModalActions.openTagModal());
  };

  const tags = useSelector((state: any) => state.tag.tagList);

  return (
    <SideDiv>
      <aside>
        <StyledLink to="/">
          <H1>기록공간</H1>
        </StyledLink>
        <Ul>
          <StyledLink to="/">
            <Li>
              <LiDiv>
                <AiOutlineForm width="30px" height="30px" margin-top="5px" />
                <Span>전체 메모</Span>
              </LiDiv>
            </Li>
          </StyledLink>
          {tags.map((tag: TagType) => {
            return (
              <StyledLink to={tag.name} key={tag.id}>
                <Li>
                  <LiDiv>
                    <AiOutlineTag width="30px" height="30px" margin-top="5px" />
                    <Span>{tag.name}</Span>
                  </LiDiv>
                </Li>
              </StyledLink>
            );
          })}

          <Li>
            <LiDiv onClick={openTagModalHandler}>
              <AiOutlineCloseCircle
                width="30px"
                height="30px"
                margin-top="5px"
              />
              <Span>태그 수정</Span>
            </LiDiv>
          </Li>
          <StyledLink to="archive">
            <Li>
              <LiDiv>
                <AiOutlineFolderOpen
                  width="30px"
                  height="30px"
                  margin-top="5px"
                />
                <Span>Archive</Span>
              </LiDiv>
            </Li>
          </StyledLink>
          <StyledLink to="trash">
            <Li>
              <LiDiv>
                <AiOutlineDelete width="30px" height="30px" margin-top="5px" />
                <Span>Trash</Span>
              </LiDiv>
            </Li>
          </StyledLink>
        </Ul>
      </aside>
    </SideDiv>
  );
}

const SideDiv = styled.div`
  height: 100%;
  background-color: #fff0ba;
  padding: 0;
  position: absolute;
  left: 0;
  height: 100vh;
  top: 0;
  width: 232px;
  padding-left: 20px;

  @media screen and (max-width: 1016px) {
    visibility: hidden;
    left: 0;
    top: 0;
    width: 0;
  }
`;

const H1 = styled.h1`
  margin: 30px 60px;
  text-align: left;
`;

const Span = styled.span`
  margin: 0 5px;
  font-size: 20px;
`;
const Ul = styled.ul`
  padding-top: 5px;
  display: block;
  margin-bottom: 50px;
`;

const LiDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Li = styled.li`
  position: relative;
  display: block;
  margin: 0 20px;
  line-height: 40px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  list-style-type: none;
  font-size: 24px;
  line-height: 80px;
  vertical-align: middle;

  &::after {
    position: absolute;
    content: "";
    display: block;
    border-bottom: 3px solid #786418;
    transition: 250ms ease-in;
    left: 0;
    right: 0;
    width: 0;
  }

  &:hover::after {
    width: 150px;
    left: 0;
    right: auto;
  }

  &:hover {
    color: #504315;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
