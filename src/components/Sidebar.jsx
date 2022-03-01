import styled from "styled-components";
import { useContext, memo } from "react";
import { ulid } from "ulid";
import { ContentsValueContext, ContentsFunctionContext } from "../App";
import { findCurrentIndex } from "./Main";
import { EditorState } from "draft-js";

const Component = memo(({ className }) => {
  const { contents, editorState } = useContext(ContentsValueContext);
  const { setContents, setcurrentPage, setEditorState } = useContext(
    ContentsFunctionContext
  );
  console.log("sidebar");
  const handleContentsAdd = () => {
    const id = ulid();
    setcurrentPage(id);
    setEditorState(() => EditorState.createEmpty());
    setContents([...contents, { id, contents: editorState }]);
  };

  const handleChangeEditor = (id) => {
    const index = findCurrentIndex(contents, id);
    console.log("contents[index]", contents[index].contents);
    setEditorState(contents[index].contents);
    setcurrentPage(id);
  };

  return (
    <div className={className}>
      <button onClick={handleContentsAdd}>add</button>
      <div className="list">
        {contents.map((item) => (
          <p key={item.id} onClick={() => handleChangeEditor(item.id)}>
            {item.id}
          </p>
        ))}
      </div>
    </div>
  );
});

export const Sidebar = styled(Component)`
  > .list {
    display: flex;
    flex-direction: column;
  }
`;
