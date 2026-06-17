import tools from "../data/tools";

export default function Home() {
  return (
    <main style={{padding:"30px",fontFamily:"Arial"}}>
      <h1>AI Solutions Directory</h1>

      <input
        type="text"
        placeholder="Search AI Tools..."
        style={{
          width:"100%",
          padding:"12px",
          marginBottom:"20px",
          border:"1px solid #ddd",
          borderRadius:"8px"
        }}
      />

      {tools.map((section,index)=>(
        <div key={index}>
          <h2>{section.category}</h2>

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",
              gap:"15px"
            }}
          >
            {section.items.map((tool,idx)=>(
              <div
                key={idx}
                style={{
                  border:"1px solid #ddd",
                  padding:"15px",
                  borderRadius:"10px"
                }}
              >
                <h3>{tool.name}</h3>

                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
