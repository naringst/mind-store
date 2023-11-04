import { useSelector } from "react-redux/es/hooks/useSelector";
import "./App.css";
import Home from "./components/Pages/Home";
import { styled } from "styled-components";
import CreateNoteModal from "./components/Modal/CreateNoteModal";
import TagModal from "./components/Modal/TagModal";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Note from "./components/Pages/Note";
import Archive from "./components/Pages/Archive";
import Trash from "./components/Pages/Trash";

function App() {
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);
  const isTagModalOpen = useSelector(
    (state: any) => state.modal.isTagModalOpen
  );
  //tags 가져오기
  const tagName = "note";

  return (
    <>
      {isModalOpen && <CreateNoteModal />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="note" element={<Note />} />
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />

          {isTagModalOpen && <Route path="*" element={<TagModal />} />}
        </Route>
      </Routes>
    </>
  );
}

export default App;
