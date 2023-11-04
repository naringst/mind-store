import React from "react";
import Home from "../Pages/Home";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Container className="App">
        <Sidebar />
        <RightDiv>
          <Header />
          <HomeDiv>
            <Outlet />
          </HomeDiv>
        </RightDiv>
      </Container>
    </div>
  );
}

const HomeDiv = styled.div`
  width: 83%;
  padding-right: 10px;
  position: fixed;
  left: 280px;
  height: 100vh;
  top: 100px;
  overflow: scroll;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
