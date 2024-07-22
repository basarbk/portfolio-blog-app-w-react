import { useRef } from "react";
import { useEditorMutator } from "../context/editorContext";
import { fileUpload } from "../../../../shared/fileUpload";

const actions = [
  {
    syntax: "**",
    icon: "format_bold",
  },
  {
    syntax: "*",
    icon: "format_italic",
  },
  {
    syntax: "~~",
    icon: "strikethrough_s",
  },
  {
    syntax: "```",
    icon: "code",
  },
];

export function Toolbar(props) {
  const fileInputRef = useRef();

  const { setContent, setError } = useEditorMutator();
  const onClick = (syntax) => {
    const contentTextArea = props.contentRef.current;
    const start = contentTextArea.selectionStart;
    const end = contentTextArea.selectionEnd;

    let selectedText = contentTextArea.value.substring(start, end);
    selectedText = syntax + selectedText + syntax;
    contentTextArea.setRangeText(selectedText, start, end);
    setContent(contentTextArea.value);
  };

  const onSelectImage = async (event) => {
    setError();
    const file = event.target.files[0];
    if (!file) return;
    const result = await fileUpload(file);
    if (result.status === "success") {
      const contentTextArea = props.contentRef.current;
      const imageText = `\n![image alt text](/api/assets/${result.data})`;
      contentTextArea.setRangeText(imageText);
      setContent(contentTextArea.value);
    } else {
      setError(result.data);
      event.target.value = null;
    }
  };

  return (
    <div className="bg-dark-subtle gap-2 d-flex p-2 rounded border">
      {actions.map((action) => (
        <button
          key={action.icon}
          className="btn btn-outline-dark btn-sm icon-link"
          onClick={() => onClick(action.syntax)}
          type="button"
        >
          <span className="material-symbols-outlined">{action.icon}</span>
        </button>
      ))}
      <button
        className="btn btn-outline-dark btn-sm icon-link"
        type="button"
        onClick={() => fileInputRef.current.click()}
      >
        <span className="material-symbols-outlined">image</span>
        <input type="file" hidden ref={fileInputRef} onChange={onSelectImage} />
      </button>
    </div>
  );
}
