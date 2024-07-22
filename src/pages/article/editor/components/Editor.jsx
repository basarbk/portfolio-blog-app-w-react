import { useRef } from "react";
import { useEditorData, useEditorMutator } from "../context/editorContext";
import { Toolbar } from "./Toolbar";
import { ImageSelector } from "../../../../components/ImageSelector";

export function Editor() {
  const { errors, title, content, image } = useEditorData();
  const { setTitle, setContent, setImage, setError } = useEditorMutator();
  const contentRef = useRef();

  return (
    <div className="bg-white d-flex flex-column p-3 border rounded flex-grow-1">
      <ImageSelector setImage={setImage} image={image} setError={setError} />
      <textarea
        className="fs-1 border-0 no-outline no-resize"
        placeholder="New post title here"
        rows="1"
        required
        onChange={(event) => setTitle(event.target.value)}
        defaultValue={title}
      />
      <span className="small text-danger">{errors.title}</span>
      <Toolbar contentRef={contentRef} />
      <textarea
        ref={contentRef}
        className="flex-grow-1 border-0 no-outline no-resize"
        placeholder="Write your post content here"
        required
        onChange={(event) => setContent(event.target.value)}
        defaultValue={content}
      />
      <span className="small text-danger">{errors.content}</span>
    </div>
  );
}
