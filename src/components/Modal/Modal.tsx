import React, { Fragment } from "react";
import { styled } from "styled-components";
import ReactDOM from "react-dom";

const Backdrop = (props: any) => {
  return <ModalDiv></ModalDiv>;
};

const ModalOverlay = (props: any) => {
  return (
    <ModalBackdrop>
      <div>{props.children}</div>
    </ModalBackdrop>
  );
};
export default function Modal(props: any) {
  const portalElement: any = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalDiv = styled.div`
  padding: 30px;
  width: 700px;
  height: 700px;
  z-index: 2;
  background: white;
`;
