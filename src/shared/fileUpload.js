export async function fileUpload(file) {
  const formData = new FormData();
  formData.append("file", file);
  const result = await fetch("/api/file/upload", {
    method: "POST",
    body: formData,
  });
  if (result.ok) {
    const body = await result.json();
    return {
      status: "success",
      data: body.filename,
    };
  }
}
