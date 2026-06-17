"use client";

import { useState } from "react";
import { tools } from "../data/tools";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCategories = tools
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
        background: "#08152f",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "60px" }}>AI Solutions</h1>
        <p>Discover the Best AI Tools Category Wise</p>
<div style={{ textAlign: "center", marginBottom: "40px" }}>
  <h1 style={{ fontSize: "60px" }}>AI Solutions</h1>
  <p>Discover the Best AI Tools Category Wise</p>

  <input
  type="text"
  placeholder="Search AI Tools..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    marginTop: "20px",
    padding: "15px",
    width: "400px",
    maxWidth: "90%",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
  }}
/>
          style={{
            marginTop: "20px",
            padding: "15px",
            width: "400px",
            maxWidth: "90%",
            borderRadius: "10px",
            border: "none",
            fontSize: "16px",
          }}
        />
      </div>

      {filteredCategories.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            {category.items.map((tool) => (
              <div
                key={tool.name}
                style={{
                  background: "#16233f",
                  padding: "25px",
                  borderRadius: "15px",
                }}
              >
                <h3>{tool.name}</h3>

                <a
                  href={tool.url}
                  target="_blank"
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
        </div>
      ))}
    </main>
  );
}
