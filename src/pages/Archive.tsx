import { useSelector } from "react-redux";
import { PagesContainer } from "./Pages.styles";
import { NoteGrid } from "./Home";
import { NoteType } from "../types/NoteType";
import Note from "./Note";

export default function Archive() {
  const archiveList = useSelector((state: any) => state.archive.archiveList);
  return (
    <PagesContainer>
      <NoteGrid>
        {archiveList.map((note: NoteType) => {
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
