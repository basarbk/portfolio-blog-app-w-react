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
    case "published":
      return {
        ...editorState,
        published: action.data,
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
    published: false,
  });

  return (
    <EditorContext.Provider value={{ ...editorData }}>
      <EditorMutatorContext.Provider
        value={{
          setTitle: (data) => dispatch({ type: "title", data }),
          setContent: (data) => dispatch({ type: "content", data }),
          setId: (data) => dispatch({ type: "id", data }),
          setPublished: (data) => dispatch({ type: "published", data }),
        }}
      >
        {props.children}
      </EditorMutatorContext.Provider>
    </EditorContext.Provider>
  );
}
