import { useReducer } from "react";
import { EditorContext, EditorMutatorContext } from "./editorContext";

const editorReducer = (editorState, action) => {
  switch (action.type) {
    case "title":
      return {
        ...editorState,
        title: action.data,
      };
    case "content":
      return {
        ...editorState,
        content: action.data,
      };
    case "id":
      return {
        ...editorState,
        id: action.data,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export function EditorContextProvider(props) {
  const [editorData, dispatch] = useReducer(editorReducer, {
    title: "",
    content: "",
    id: "",
  });

  return (
    <EditorContext.Provider value={{ ...editorData }}>
      <EditorMutatorContext.Provider
        value={{
          setTitle: (data) => dispatch({ type: "title", data }),
          setContent: (data) => dispatch({ type: "content", data }),
          setId: (data) => dispatch({ type: "id", data }),
        }}
      >
        {props.children}
      </EditorMutatorContext.Provider>
    </EditorContext.Provider>
  );
}
