import { useReducer } from "react";
import { EditorContext, EditorMutatorContext } from "./editorContext";

const editorReducer = (editorState, action) => {
  switch (action.type) {
    case "title":
      return {
        ...editorState,
        title: action.data,
        errors: {
          ...editorState.errors,
          title: "",
        },
      };
    case "content":
      return {
        ...editorState,
        content: action.data,
        errors: {
          ...editorState.errors,
          content: "",
        },
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
    case "errors":
      return {
        ...editorState,
        errors: action.data,
      };
    case "error":
      return {
        ...editorState,
        error: action.data,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export function EditorContextProvider(props) {
  let initialData = {
    title: "",
    content: "",
    id: "",
    published: false,
    errors: {},
    error: "",
  };

  if (props.init) {
    initialData = {
      ...initialData,
      ...props.init,
    };
  }

  const [editorData, dispatch] = useReducer(editorReducer, initialData);

  return (
    <EditorContext.Provider value={{ ...editorData }}>
      <EditorMutatorContext.Provider
        value={{
          setTitle: (data) => dispatch({ type: "title", data }),
          setContent: (data) => dispatch({ type: "content", data }),
          setId: (data) => dispatch({ type: "id", data }),
          setPublished: (data) => dispatch({ type: "published", data }),
          setErrors: (data) => dispatch({ type: "errors", data }),
          setError: (data) => dispatch({ type: "error", data }),
        }}
      >
        {props.children}
      </EditorMutatorContext.Provider>
    </EditorContext.Provider>
  );
}
