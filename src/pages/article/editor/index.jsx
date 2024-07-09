import { AppButton } from "../../../components";
import { Editor } from "./components/Editor";
export function ArticleEditor() {
  return (
    <div className="d-flex flex-column editor-base">
      <Editor />
      <div className="d-flex gap-2 py-3 px-2">
        <AppButton>Publish</AppButton>
        <AppButton variant="success">Save</AppButton>
      </div>
    </div>
  );
}
