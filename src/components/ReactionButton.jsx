import { useState } from "react";

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

export function ReactionButton({ entityId, reaction }) {
  const [reacted, setReacted] = useState(false);
  const onClick = async () => {
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
  };
  return (
    <div onClick={onClick}>
      <span
        className="material-symbols-outlined action"
        style={
          reacted
            ? {
                fontVariationSettings: `'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24`,
                color: reactions[reaction].color,
              }
            : {}
        }
      >
        {reactions[reaction].icon}
      </span>
    </div>
  );
}
