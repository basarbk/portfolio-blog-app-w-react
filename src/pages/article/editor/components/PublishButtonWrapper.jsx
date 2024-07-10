import { PublishButton } from "../../components/PublishButton";
import { useEditorData, useEditorMutator } from "../context/editorContext";

export function PublishButtonWrapper() {
  const { id, published } = useEditorData();
  const { setPublished } = useEditorMutator();

  return (
    <PublishButton id={id} published={published} setPublished={setPublished} />
  );
}
