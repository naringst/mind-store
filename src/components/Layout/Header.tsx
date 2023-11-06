import { styled } from "styled-components";
import { modalActions } from "../../store";

import { useDispatch } from "react-redux";

export default function Header() {
  const title: string = "노트";

  const dispatch = useDispatch();
  const openModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(modalActions.openModal());
  };

  return (
    <StyledHeader>
      <H1>{title}</H1>
      <Button onClick={openModalHandler}>+</Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 75px;
  width: 100%;
  margin: 0 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 2px -2px #f5f5f5;
`;

const H1 = styled.h1`
  margin: 270px;

  @media screen and (max-width: 1016px) {
    margin: 80px;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 40px;
  margin: 10px 110px;
  background: #fff0ba;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  @media screen and (max-width: 1016px) {
    margin: 10px 80px;
  }
`;
