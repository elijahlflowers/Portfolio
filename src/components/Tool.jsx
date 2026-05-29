import { Link } from "react-router-dom"
import { TOOLS, SOCIAL } from './toolconfig'
// ============================================================
// Tool — single card
// Supports:
//   tool.to   → internal React Router link (same tab)
//   tool.href → external link (new tab)
// ============================================================
export function Tool({ tool }) {
  const inner = (
    <>
      {tool.image && (
        <div className="tool-card__image-wrap">
          <img
            src={tool.image}
            alt={tool.title}
            className="tool-card__image"
          />
        </div>
      )}
      <div className="tool-card__body">
        <h3 className="tool-card__title">{tool.title}</h3>
        {tool.description && (
          <p className="tool-card__desc">{tool.description}</p>
        )}
      </div>
    </>
  );

  if (tool.to) {
    return (
      <Link to={tool.to} className="tool-card">
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={tool.href}
      className="tool-card"
      target="_blank"
      rel="noreferrer"
    >
      {inner}
    </a>
  );
}

// ============================================================
// ToolList — renders a labeled section of cards
// ============================================================
export function ToolList({ title = "Tools", tools, columns = 3 }) {
  return (
    <section className="tool-list">
      <h2 className="tool-list__heading">{title}</h2>
      <div
        className="tool-list__grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 180px)` }}
      >
        {tools.map((tool) => (
          <Tool key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// ToolContainer — top-level wrapper; pass all tool groups here
// ============================================================
export function ToolContainer({ tools = TOOLS, social = null }) {
  return (
    <div className="tool-container">
      <ToolList title="Projects" tools={tools} columns={tools.length} />
      {social && social.length > 0 && (
        <ToolList title="GitHub" tools={social} columns={1} />
      )}
    </div>
  );
}