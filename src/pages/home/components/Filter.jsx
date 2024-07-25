import { useAuth } from "../../../context/authContext";

export function Filter({ setFilter }) {
  const { auth } = useAuth();
  if (!auth.id) return null;
  return (
    <div className="d-flex py-3">
      <div className="flex-grow-1">
        <button
          className="btn btn-sm btn-outline-dark"
          onClick={() => setFilter()}
        >
          Latest
        </button>
      </div>
      <div className="d-flex gap-2">
        <button
          className="btn btn-sm btn-danger icon-link"
          onClick={() => setFilter("like")}
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <button
          className="btn btn-sm btn-warning icon-link"
          onClick={() => setFilter("hot")}
        >
          <span className="material-symbols-outlined">
            local_fire_department
          </span>
        </button>
        <button
          className="btn btn-sm btn-primary icon-link"
          onClick={() => setFilter("readingList")}
        >
          <span className="material-symbols-outlined">bookmark</span>
        </button>
      </div>
    </div>
  );
}
