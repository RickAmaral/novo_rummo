// src/components/BookCard.tsx
import React from "react";

type Props = {
  title: string;
  author: string;
  excerpt?: string;
  coverUrl?: string;
};

export default function BookCard({ title, author, excerpt, coverUrl }: Props) {
  return (
    <article style={{ background: "#fff", borderRadius: 8, boxShadow: "0 1px 3px rgba(15,23,42,0.06)", overflow: "hidden" }}>
      <div style={{ height: 140, background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={coverUrl} alt={`${title} capa`} style={{ width: 80, height: 100, objectFit: "contain" }} />
      </div>
      <div style={{ padding: 12 }}>
        <h3 style={{ margin: 0, fontSize: 16 }}>{title}</h3>
        <p style={{ margin: "6px 0 0", color: "#64748b", fontSize: 13 }}>{author}</p>
        <p style={{ marginTop: 10, color: "#475569", fontSize: 13 }}>{excerpt}</p>
      </div>
    </article>
  );
}
