import { useState } from "react";
import { AppButton } from "../../../components";
import { Editor } from "./components/Editor";

export function ArticleEditor() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [id, setId] = useState();

  const saveArticle = async (event) => {
    event.preventDefault();
    const url = id ? `/api/articles/${id}` : "/api/articles";
    const response = await fetch(url, {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const body = await response.json();
    if (response.ok) {
      setId(body.id);
    }
  };

  return (
    <form onSubmit={saveArticle}>
      <div className="d-flex flex-column editor-base">
        <Editor setTitle={setTitle} setContent={setContent} />
        <div className="d-flex gap-2 py-3 px-2">
          <AppButton type="button">Publish</AppButton>
          <AppButton type="submit" variant="success">
            {id ? "Update" : "Save as Draft"}
          </AppButton>
        </div>
      </div>
    </form>
  );
}
