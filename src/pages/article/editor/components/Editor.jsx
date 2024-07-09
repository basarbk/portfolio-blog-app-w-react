export function Editor({ setTitle, setContent }) {
  return (
    <div className="bg-white d-flex flex-column p-3 border rounded flex-grow-1">
      <textarea
        className="fs-1 border-0 no-outline no-resize"
        placeholder="New post title here"
        rows="1"
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className="flex-grow-1 border-0 no-outline no-resize"
        placeholder="Write your post content here"
        onChange={(event) => setContent(event.target.value)}
      />
    </div>
  );
}
