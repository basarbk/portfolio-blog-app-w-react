import { AppButton, AppToast } from "../../../components";
import { Editor } from "./components/Editor";
import { PublishButtonWrapper } from "./components/PublishButtonWrapper";
import { EditorContextProvider } from "./context/EditContextProvider";
import { useEditorData } from "./context/editorContext";
import { useSubmit } from "./hooks/useSubmit";

function ArticleEditorInner() {
  const { saveArticle, saveButtonText, apiProgress } = useSubmit();
  const { error } = useEditorData();

  return (
    <>
      <form onSubmit={saveArticle} noValidate>
        <div className="d-flex flex-column editor-base">
          <Editor />
          <div className="d-flex gap-2 py-3 px-2">
            <PublishButtonWrapper />
            <AppButton type="submit" variant="success" loading={apiProgress}>
              {saveButtonText}
            </AppButton>
          </div>
        </div>
      </form>
      <AppToast message={error} />
    </>
  );
}

export function ArticleEditor({ article }) {
  return (
    <EditorContextProvider init={article}>
      <ArticleEditorInner />
    </EditorContextProvider>
  );
}
