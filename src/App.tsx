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
import Tag from "./components/Pages/Tag";
import { TagType } from "./store";

function App() {
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);
  const isTagModalOpen = useSelector(
    (state: any) => state.tagModal.isTagModalOpen
  );

  //tags 가져오기
  const tagList = useSelector((state: any) => state.tag.tagList);

  return (
    <>
      {isModalOpen && <CreateNoteModal />}
      {isTagModalOpen && <TagModal />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          {tagList.map((tag: TagType) => {
            return <Route path={tag.name} element={<Tag name={tag.name} />} />;
          })}
          <Route path="archive" element={<Archive />} />
          <Route path="trash" element={<Trash />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
