// src/app/page.tsx
import React from "react";
import BookCard from "@/components/BookCard";

const sampleBooks = [
  {
    id: "1",
    title: "Novo RUMMO — Introdução",
    author: "Equipe RUMMO",
    excerpt: "Uma visão geral do projeto Novo RUMMO e seus objetivos.",
    cover: "/favicon.ico",
  },
  {
    id: "2",
    title: "Manual do Editor",
    author: "Equipe RUMMO",
    excerpt: "Como publicar e gerenciar obras na plataforma.",
    cover: "/favicon.ico",
  },
];

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#f7fafc", color: "#0f172a" }}>
      <header style={{ padding: "24px 16px", borderBottom: "1px solid #e6e6e6", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Novo RUMMO</div>
          <nav style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
            <a href="#" style={{ color: "#0f172a", textDecoration: "none" }}>Início</a>
            <a href="#" style={{ color: "#0f172a", textDecoration: "none" }}>Catálogo</a>
            <a href="#" style={{ color: "#0f172a", textDecoration: "none" }}>Admin</a>
          </nav>
        </div>
      </header>

      <section style={{ maxWidth: 1100, margin: "32px auto", padding: "0 16px" }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>Bem-vindo ao Novo RUMMO</h1>
        <p style={{ color: "#475569", marginTop: 8 }}>
          Plataforma para publicar, organizar e distribuir conteúdo. Edite <code>src/app/page.tsx</code> para começar.
        </p>

        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {sampleBooks.map((b) => (
            <BookCard key={b.id} title={b.title} author={b.author} excerpt={b.excerpt} coverUrl={b.cover} />
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #e6e6e6", padding: "20px 16px", marginTop: 40, background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", color: "#64748b" }}>
          © {new Date().getFullYear()} Novo RUMMO — Plataforma em desenvolvimento
        </div>
      </footer>
    </main>
  );
}
