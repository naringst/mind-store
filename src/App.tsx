import { useSelector } from "react-redux/es/hooks/useSelector";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./components/Home";
import { styled } from "styled-components";
import CreateNoteModal from "./components/CreateNoteModal";

function App() {
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);

  return (
    <>
      {isModalOpen && <CreateNoteModal />}
      <Container className="App">
        <Sidebar />
        <Header />
        <Home />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  grid-template-areas: "Sidebar Header" "Sidebar Home";
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr;
  z-index: 0;
`;
