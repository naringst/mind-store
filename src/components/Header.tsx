import { styled } from "styled-components";
import { modalActions } from "../store";

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
      <h1>{title}</h1>
      <Button onClick={openModalHandler}>+</Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 55px;
  width: 100%;
  padding: 10px 10px 10px 40px;
  grid-area: Header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 5px -2px gray;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px 50px;
  background: yellow;
  border-radius: 5px;
  cursor: pointer;
`;
