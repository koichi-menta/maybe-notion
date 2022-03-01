import styled from "styled-components";
import { useContext } from "react";
import { ContentsValueContext, ContentsFunctionContext } from "../App";
import { Editor } from "draft-js";

export const findCurrentIndex = (data, current) => {
  const newData = [...data];
  const index = newData.findIndex((item) => current === item.id);
  return index;
};

export const findCurrentData = (data, overrideData, current) => {
  const newData = [...data];
  const index = findCurrentIndex(data, current);
  if (index > -1) {
    const item = newData[index];
    newData.splice(index, 1, { ...item, contents: overrideData });
    return newData;
  }
  return undefined;
};

export const Component = ({ className }) => {
  const { contents, editorState, currentPage } =
    useContext(ContentsValueContext);
  const { setEditorState, setContents } = useContext(ContentsFunctionContext);

  const handleEditorChange = (e) => {
    const aaa = findCurrentData(contents, e, currentPage);
    setContents(aaa);
    setEditorState(e);
  };
  console.log("contents", contents);
  console.log("editorState", editorState.get);

  return (
    contents.length !== 0 && (
      <div className={className}>
        <Editor editorState={editorState} onChange={handleEditorChange} />
      </div>
    )
  );
};

export const Main = styled(Component)`
  width: 300px;
  padding: 5px;
  border: 1px solid;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
