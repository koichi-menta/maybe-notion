import "./App.css";
import { useState, createContext } from "react";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { EditorState } from "draft-js";

export const ContentsValueContext = createContext();
export const ContentsFunctionContext = createContext();

const App = () => {
  const [contents, setContents] = useState([]);
  const [currentPage, setcurrentPage] = useState([]);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  // console.log("app contents", contents);

  return (
    <div className="App">
      {/* 　ここのレンダリングのパフォーマンスを調べる */}
      <ContentsFunctionContext.Provider
        value={{ setContents, setcurrentPage, setEditorState }}
      >
        <ContentsValueContext.Provider
          value={{ contents, currentPage, editorState }}
        >
          <Sidebar />
          <Main />
          {/* <Sample /> */}
        </ContentsValueContext.Provider>
      </ContentsFunctionContext.Provider>
    </div>
  );
};

export default App;
