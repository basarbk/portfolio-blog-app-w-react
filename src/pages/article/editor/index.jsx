import { AppButton } from "../../../components";
import { Editor } from "./components/Editor";
import { EditorContextProvider } from "./context/EditContextProvider";
import { useSubmit } from "./hooks/useSubmit";

function ArticleEditorInner() {
  const { saveArticle, saveButtonText } = useSubmit();

  return (
    <form onSubmit={saveArticle}>
      <div className="d-flex flex-column editor-base">
        <Editor />
        <div className="d-flex gap-2 py-3 px-2">
          <AppButton type="button">Publish</AppButton>
          <AppButton type="submit" variant="success">
            {saveButtonText}
          </AppButton>
        </div>
      </div>
    </form>
  );
}

export function ArticleEditor() {
  return (
    <EditorContextProvider>
      <ArticleEditorInner />
    </EditorContextProvider>
  );
}
