import "react-quill/dist/quill.snow.css";
import Editor from "./Editor";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addedTagsActions } from "../../store/tag";
import { noteActions } from "../../store/note";
import { modalActions, tagModalActions } from "../../store";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { Tag } from "./Modal.styles";
import { v4 } from "uuid";

export default function CreateNoteModal() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  //추가된 태그
  const addedTagList = useSelector((state: any) => state.addedTag.addedTagList);
  const updateNote = useSelector((state: any) => state.note.updateNote);
  const isEdit = useSelector((state: any) => state.note.isEdit);

  const checkIsEdit = () => {
    if (isEdit === true) {
      setTitle(updateNote[0].title);
      setContents(updateNote[0].content);
      setBackgroundColor(updateNote[0].color);
      setPriority(updateNote[0].priority);
      //태그 렌더링?
    }
  };

  useEffect(() => {
    checkIsEdit();
  }, []);
  //노트 모달 닫기 버튼
  const closeModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(modalActions.toggleModal(false));
    dispatch(addedTagsActions.deleteAllTag());
    dispatch(noteActions.exitUpdateNote());
  };

  //태그 모달 열기 버튼
  const openTagModalHandler = (e: any) => {
    e.preventDefault();
    dispatch(tagModalActions.openAddTagModal());
  };

  //태그 삭제
  const deleteTag = (e: any) => {
    e.preventDefault();
    if (addedTagList.includes(e.target.id) === true) {
      dispatch(addedTagsActions.deleteTag(e.target.id));
    }
  };

  //배경 색 설정
  const selectBackgroundColor = (e: any) => {
    if (e.target.value === "orange") {
      setBackgroundColor("#efaa52");
    } else if (e.target.value === "green") {
      setBackgroundColor("#ddeecc");
    } else if (e.target.value === "blue") {
      setBackgroundColor("#c4d4e0");
    } else if (e.target.value === "yellow") {
      setBackgroundColor("#fff0ba");
    } else if (e.target.value === "pink") {
      setBackgroundColor("#ffc5bf");
    }
    console.log(e.target.value);
  };

  //우선 순위 설정
  const selectPriority = (e: any) => {
    setPriority(e.target.value);
  };

  //handleQuillContent();

  //노트 생성
  const createNewNote = (e: any) => {
    const createdTime = Date.now();

    dispatch(
      noteActions.addNote({
        id: v4(),
        title: title,
        priority: priority,
        pinned: false,
        content: contents,
        tags: [],
        createdTime: new Date(createdTime),
        color: backgroundColor,
      })
    );
    dispatch(modalActions.toggleModal(false));
    dispatch(addedTagsActions.deleteAllTag());
    setTitle("");
    setContents("");
    setBackgroundColor("white");
    setPriority("low");
  };

  const updateNoteHandler = () => {
    const createdTime = Date.now();
    dispatch(
      noteActions.editNote({
        id: updateNote[0].id,
        title: title,
        priority: priority,
        pinned: updateNote[0].pinned,
        content: contents,
        tags: [...updateNote[0].tags],
        createdTime: new Date(createdTime),
        color: backgroundColor,
      })
    );
    dispatch(modalActions.toggleModal(false));
    dispatch(addedTagsActions.deleteAllTag());
    setTitle("");
    setContents("");
    setBackgroundColor("white");
    setPriority("low");
  };

  return (
    <Modal>
      <ModalDiv>
        {isEdit ? (
          <>
            <CreateButton onClick={closeModalHandler}> x</CreateButton>
            <div>
              <h2>메모 수정하기</h2>
            </div>
          </>
        ) : (
          <>
            <CreateButton onClick={closeModalHandler}>x</CreateButton>
            <div>
              <h2>메모 생성하기</h2>
            </div>
          </>
        )}

        <NoteNameInput
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
        ></NoteNameInput>
        <Editor
          backgroundColor={backgroundColor}
          contents={contents}
          setContents={setContents}
        />
        <TagDiv>
          {addedTagList.map((tag: any) => {
            return (
              <Tag id={tag} onClick={deleteTag}>
                {`${tag}    x`}
              </Tag>
            );
          })}
        </TagDiv>
        <BottomDiv>
          <CreateButton onClick={openTagModalHandler}>태그 추가</CreateButton>
          <div>
            <Label htmlFor="background-color">배경 색</Label>
            <Select id="background-color" onChange={selectBackgroundColor}>
              <option value="white" selected={"white" === backgroundColor}>
                흰색
              </option>
              <option value="yellow" selected={"#fff0ba" === backgroundColor}>
                노란색
              </option>
              <option value="pink" selected={"#ffc5bf" === backgroundColor}>
                핑크색
              </option>
              <option value="green" selected={"#ddeecc" === backgroundColor}>
                초록색
              </option>
              <option value="blue" selected={"#c4d4e0" === backgroundColor}>
                파란색
              </option>
            </Select>
          </div>
          <div>
            <Label htmlFor="background-color">우선순위</Label>
            <Select onChange={selectPriority}>
              <option value="LOW" selected={"LOW" === priority}>
                낮음
              </option>
              <option value="HIGH" selected={"HIGH" === priority}>
                높음
              </option>
            </Select>
          </div>
        </BottomDiv>
        {isEdit ? (
          <CreateButton onClick={updateNoteHandler}>노트 수정</CreateButton>
        ) : (
          <CreateButton onClick={createNewNote}>노트 생성</CreateButton>
        )}
      </ModalDiv>
    </Modal>
  );
}

const ModalDiv = styled.div`
  padding: 30px;
  width: 700px;
  height: 650px;
  z-index: 10;
  background: white;
  border-radius: 5px;
`;
const NoteNameInput = styled.input`
  width: 650px;
  height: 30px;
  margin: 10px 0;
  border: 1px solid #a8a8a8;
  border-radius: 5px;
  padding: 3px 10px;
`;

const Label = styled.label`
  margin: 0 5px;
`;

const Select = styled.select`
  padding: 0 3px;
  font-size: 16px;
  border-radius: 5px;
  outline: 0 none;
  background: #fff0ba;
  border: #d9d9d9;
  width: max-content;
  height: 30px;
`;

const TagDiv = styled.div`
  justify-content: left;
  display: flex;
  margin: 50px 0 10px 0;
`;
const BottomDiv = styled.div`
  margin: 10px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

const CreateButton = styled.button`
  float: right;
  width: max-content;
  height: 30px;
  padding: 5px 10px;
  margin: 0;
  border: none;
  background: #fff0ba;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #efe6cc;
  }
`;
