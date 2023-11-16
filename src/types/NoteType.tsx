//노트 저장 상태
export interface NoteType {
  id: string;
  title: string;
  priority: string;
  pinned: boolean;
  content: string;
  tags: string[];
  createdTime: String;
  color: string;
}

export interface NoteListType {
  noteList: NoteType[];
}
