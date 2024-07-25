import { useState } from "react";
import { useAuth } from "../context/authContext";

const reactions = {
  like: {
    icon: "favorite",
    color: "red",
  },
  hot: {
    icon: "local_fire_department",
    color: "orange",
  },
  readingList: {
    icon: "bookmark",
    color: "var(--bs-primary)",
  },
};

export function ReactionButton({ entityId, reaction, details }) {
  const [reacted, setReacted] = useState(details.reacted);
  const [count, setCount] = useState(details.count);
  const { auth } = useAuth();

  const onClick = async () => {
    if (!auth.id) return;
    const response = await fetch("/api/reactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entityType: "article",
        entityId,
        category: reaction,
      }),
    });
    const body = await response.json();
    setReacted(body.result);
    if (body.result) {
      setCount((previousCount) => previousCount + 1);
    } else {
      setCount((previousCount) => previousCount - 1);
    }
  };
  return (
    <div onClick={onClick} className="icon-link">
      <span
        className="material-symbols-outlined action"
        style={
          auth.id > 0 && reacted
            ? {
                fontVariationSettings: `'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24`,
                color: reactions[reaction].color,
              }
            : {}
        }
      >
        {reactions[reaction].icon}
      </span>
      {count}
    </div>
  );
}
