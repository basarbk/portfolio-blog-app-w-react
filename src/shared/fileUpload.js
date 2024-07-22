export async function fileUpload(file) {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const result = await fetch("/api/file/upload", {
      method: "POST",
      body: formData,
    });
    const body = await result.json();
    if (result.ok) {
      return {
        status: "success",
        data: body.filename,
      };
    } else {
      return {
        status: "error",
        data: result.status === 400 ? body.validationErrors.file : body.message,
      };
    }
  } catch {
    return {
      status: "error",
      data: "Unexpected error occurred, please try again",
    };
  }
}
