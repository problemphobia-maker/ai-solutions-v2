import { tools } from "../data/tools";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Solutions</h1>
      <p>Explore AI tools category-wise.</p>

      {Object.entries(tools).map(([category, toolList]) => (
        <section key={category} style={{ marginTop: "40px" }}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {toolList.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h3>{tool.name}</h3>
                <p>Visit Website →</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
