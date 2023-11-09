import { useRef, useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

interface EditorProps {
  backgroundColor: string;
}
const Editor = ({ backgroundColor }: EditorProps) => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState("");

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ color: [] }, { background: ["#00000", "#d9d9d9"] }],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
        ],
      },
    }),
    []
  );

  return (
    <Container backgroundColor={backgroundColor}>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        style={{
          width: "650px",
          height: "300px",
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
    </Container>
  );
};

export default Editor;

export const Container = styled.div<{ backgroundColor: string }>`
  .ql-editor {
    height: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`;
