import { Link } from "react-router-dom"
import { ToolContainer } from '../components/Tool'
import Itchio from '../assets/itchio.svg'

// External links specific to this page
const GAME_DEV_TOOLS = [
  {
    id: 1,
    title: "itch.io Games & Prototypes",
    description: "",
    image: Itchio,
    href: "https://elijahlflowers.itch.io/",
  },
  // Add more external links here as needed
];

export default function GameDev() {
  return (
    <section id="top">
      <div className="header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Game Development</h1>
      </div>
      <ToolContainer tools={GAME_DEV_TOOLS} />
    </section>
  )
}