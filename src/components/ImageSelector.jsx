import { useRef } from "react";
import { fileUpload } from "../shared/fileUpload";

export function ImageSelector({ image, setImage, setError }) {
  const fileInputRef = useRef();
  const onSelectImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const result = await fileUpload(file);
    if (result.status === "success") {
      setImage(result.data);
    } else {
      setError(result.data);
    }
  };
  return (
    <div className="d-flex align-items-center gap-2">
      {image && (
        <img
          src={`/api/assets/${image}`}
          className="img-thumbnail"
          width={200}
        />
      )}
      <div className="d-flex flex-column gap-2">
        <button
          className="btn btn-outline-success btn-sm"
          type="button"
          onClick={() => fileInputRef.current.click()}
        >
          Add Image
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={onSelectImage}
          />
        </button>
        {image && (
          <button
            className="btn btn-outline-danger btn-sm"
            type="button"
            onClick={() => setImage(null)}
          >
            Delete Image
          </button>
        )}
      </div>
    </div>
  );
}
