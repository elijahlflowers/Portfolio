import { Link } from "react-router-dom"
import './gallery-grid.css'


const imageModules = import.meta.glob('../assets/gallery/**/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default'
});

// Group images by their parent folder
const GALLERY_SECTIONS = Object.entries(imageModules).reduce((sections, [path, src]) => {
  const parts = path.split('/');
  const folder = parts[parts.length - 2]; // e.g. "branding"
  const filename = parts[parts.length - 1].split('.')[0];

  if (!sections[folder]) {
    sections[folder] = [];
  }
  sections[folder].push({ id: filename, title: filename, src });

  return sections;
}, {});

export default function GameDev() {
  return (
    <section id="top">
      <div className="header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Graphic Design</h1>
      </div>

      {Object.entries(GALLERY_SECTIONS).map(([sectionName, images]) => (
        <div key={sectionName} className="gallery-section">
          <h2>{formatSectionTitle(sectionName)}</h2>
          <div className="gallery-grid">
            {images.map((img) => (
              <figure key={img.id} className="gallery-item">
                <img src={img.src}/>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

function formatSectionTitle(folder) {
  return folder
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()); // "ui-mockups" -> "Ui Mockups"
}