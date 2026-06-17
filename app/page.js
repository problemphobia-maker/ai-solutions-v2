"use client";

import { useState } from "react";
import tools from "../data/tools";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = tools
    .map((category) => ({
      ...category,
      items: category.items.filter((tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        AI Solutions
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Discover the Best AI Tools Category Wise
      </p>

      <input
        type="text"
        placeholder="🔍 Search AI Tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #334155",
          marginBottom: "40px",
          fontSize: "16px",
        }}
      />

      {filteredTools.map((category, index) => (
        <section key={index} style={{ marginBottom: "50px" }}>
          <h2
            style={{
              marginBottom: "20px",
              borderBottom: "1px solid #334155",
              paddingBottom: "10px",
            }}
          >
            {category.category}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            {category.items.map((tool, idx) => (
              <div
                key={idx}
                style={{
                  background: "#1e293b",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid #334155",
                }}
              >
                <h3>{tool.name}</h3>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#38bdf8",
                    textDecoration: "none",
                  }}
                >
                  Visit Tool →
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer
        style={{
          textAlign: "center",
          marginTop: "60px",
          padding: "30px",
          borderTop: "1px solid #334155",
        }}
      >
        © 2026 AI Solutions Directory
      </footer>
    </main>
  );
}
