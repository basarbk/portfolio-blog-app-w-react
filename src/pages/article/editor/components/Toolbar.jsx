import { useEditorMutator } from "../context/editorContext";

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
  const { setContent } = useEditorMutator();
  const onClick = (syntax) => {
    const contentTextArea = props.contentRef.current;
    const start = contentTextArea.selectionStart;
    const end = contentTextArea.selectionEnd;

    let selectedText = contentTextArea.value.substring(start, end);
    selectedText = syntax + selectedText + syntax;
    contentTextArea.setRangeText(selectedText, start, end);
    setContent(contentTextArea.value);
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
    </div>
  );
}
