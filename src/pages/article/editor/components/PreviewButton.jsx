import { Link } from "react-router-dom";
import { useEditorData } from "../context/editorContext";
import { useAuth } from "../../../../context/authContext";

export function PreviewButton() {
  const { id } = useEditorData();
  const { auth } = useAuth();
  if (!id) return null;
  return (
    <Link className="btn btn-warning icon-link" to={`/${auth.handle}/${id}`}>
      Preview
    </Link>
  );
}
