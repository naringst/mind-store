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
  padding: 0 50px 0 0;
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
  @media screen and (max-width: 860px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  margin: 10px 0px 10px;
  width: 60px;
  height: 40px;

  background: #fff0ba;
  border-radius: 5px;
  cursor: pointer;
  border: none;

  @media screen and (max-width: 1016px) {
    margin: 10px 80px;
  }
`;
