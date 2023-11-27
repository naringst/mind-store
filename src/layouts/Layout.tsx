import React from "react";
import Home from "../pages/Home";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Container className="App">
      <Sidebar />
      <RightDiv>
        <Header />
        <HomeDiv>
          <Outlet />
        </HomeDiv>
      </RightDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const RightDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-left: 30px;
  @media screen and (max-width: 1016px) {
    margin: 0px;
  }
`;

const HomeDiv = styled.div`
  width: 90%;
  padding-left: 0px;
  padding-right: 10px;
  position: fixed;
  left: 220px;
  height: 100vh;
  top: 100px;
  overflow: scroll;

  @media screen and (max-width: 1016px) {
    width: 100%;
    position: static;
  }
`;
