import { useSelector } from "react-redux";
import { NoteType } from "../types/NoteType";
import { NoteGrid } from "./Home";
import Note from "./Note";
import { PagesContainer } from "./Pages.styles";

export default function Trash() {
  const trashList = useSelector((state: any) => state.trash.trashList);
  return (
    <PagesContainer>
      <NoteGrid>
        {trashList.map((note: NoteType) => {
          return (
            <Note
              id={note.id}
              title={note.title}
              content={note.content}
              priority={note.priority}
              pinned={note.pinned}
              tags={note.tags}
              createdTime={note.createdTime}
              color={note.color}
            ></Note>
          );
        })}
      </NoteGrid>
    </PagesContainer>
  );
}
