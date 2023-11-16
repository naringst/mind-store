import { useSelector } from "react-redux/es/hooks/useSelector";
import "./App.css";
import Home from "./pages/Home";
import CreateNoteModal from "./components/Modal/CreateNoteModal";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import Tag from "./pages/Tag";
import { TagType } from "./store/tag";

import AddTagModal from "./components/Modal/AddTagModal";
import EditTagModal from "./components/Modal/EditTagModal";
import SortModal from "./components/Modal/SortModal";

function App() {
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);
  const isTagModalOpen = useSelector(
    (state: any) => state.tagModal.isTagModalOpen
  );

  const isAddTagModalOpen = useSelector(
    (state: any) => state.tagModal.isAddTagModalOpen
  );

  const isSortModalOpen = useSelector(
    (state: any) => state.sortModal.isSortModalOpen
  );
  const tagList = useSelector((state: any) => state.tag.tagList);

  return (
    <>
      {isModalOpen && <CreateNoteModal />}
      {isAddTagModalOpen && <AddTagModal />}
      {isTagModalOpen && <EditTagModal />}
      {isSortModalOpen && <SortModal />}

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
