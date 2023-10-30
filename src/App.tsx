import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import { styled } from "styled-components";

function App() {
  return (
    <Grid className="App">
      <Sidebar />
      <Header />
      <Home />
    </Grid>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
  grid-template-areas: "Sidebar Header" "Sidebar Home";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr;
`;
