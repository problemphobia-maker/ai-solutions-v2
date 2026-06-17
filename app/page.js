"use client";

import { useState } from "react";
import tools from "../data/tools";

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

  const totalTools = filteredCategories.reduce(
    (total, category) => total + category.items.length,
    0
  );

  return (
    <main
      style={{
        background: "#08152f",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          AI Solutions
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "18px",
          }}
        >
          Discover the Best AI Tools Category Wise
        </p>

        <input
          type="text"
          placeholder="Search AI Tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginTop: "20px",
            padding: "15px",
            width: "450px",
            maxWidth: "90%",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "16px",
          }}
        />

        <p
          style={{
            color: "#38bdf8",
            marginTop: "15px",
            fontSize: "16px",
          }}
        >
          {totalTools} AI Tools Found
        </p>
      </div>

      {filteredCategories.map((category) => (
        <div
          key={category.category}
          style={{
            marginBottom: "50px",
          }}
        >
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
              gridTemplateColumns:
                "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {category.items.map((tool) => (
              <div
                key={tool.name}
                style={{
                  background: "#16233f",
                  padding: "25px",
                  borderRadius: "15px",
                  transition: "0.3s",
                }}
              >
                <h3
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  {tool.name}
                </h3>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#38bdf8",
                    textDecoration: "none",
                    fontWeight: "bold",
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
