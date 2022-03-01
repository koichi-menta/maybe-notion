import styled from "styled-components";
import { useState } from "react";
import { Editor, EditorState } from "draft-js";

const Hoge = ({ className }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className={className}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export const Sample = styled(Hoge)`
  width: 300px;
  padding: 5px;
  border: 1px solid;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
