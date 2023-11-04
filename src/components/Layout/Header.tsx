import { styled } from "styled-components";
import { modalActions } from "../../store";

import { useDispatch } from "react-redux";

export default function Header({ openModal }: any) {
  const title: string = "노트";
  const dispatch = useDispatch();
  const openModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(modalActions.openModal());
    console.log("opened");
  };

  return (
    <StyledHeader>
      <H1>{title}</H1>
      <Button onClick={openModalHandler}>+</Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding-top: 10px;
  height: 75px;
  width: 95%;
  padding: 10px 0 10px 80px;
  margin: 0 100px 0 0;
  grid-area: Header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 2px -2px #f5f5f5;
  margin-bottom: 10px;
  position: fixed;
  left: 280px;
  top: 0;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  width: 60px;
  height: 40px;
  margin: 10px 80px;
  background: #fff0ba;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;
