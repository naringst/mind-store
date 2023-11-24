//노트 저장 상태
export interface NoteType {
  id: string;
  title: string;
  priority: string;
  pinned: boolean;
  content: string;
  tags: string[];
  createdTime: Date;
  color: string;
}

export interface NoteListType {
  noteList: NoteType[];
  isEdit: boolean;
  updateNote: NoteType[];
}

export interface TrashListType {
  trashList: NoteType[];
}

export interface ArchiveListType {
  archiveList: NoteType[];
}
