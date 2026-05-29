import { Link } from "react-router-dom"
import { ToolContainer } from '../components/Tool'
import CS2ools from '../assets/CS2ools.svg'
import Trazzam from '../assets/trazzamlogo.svg'

const TOOLS_UI_TOOLS = [
  {
    id: 1,
    title: "CS2ools",
    description: "Tools/Calculators made for Counter-Strike 2 E-sports",
    image: CS2ools,
    href: "https://cs2ools.blue/",
  },
  {
    id: 2,
    title: "Trazzam",
    description: "Figma prototype for a live music translation app",
    image: Trazzam,
    href: "https://www.figma.com/proto/oDR23PRLXwjFwhoiv8POv7/Trazzam---Prototype?node-id=73-124&p=f&t=ulmEHMqO0vdQYqNn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=36%3A32"
  }
];

export default function ToolsUI() {
  return (
    <section id="top">
      <div className="header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Tools and User Interfaces</h1>
      </div>
      <ToolContainer tools={TOOLS_UI_TOOLS} />
    </section>
  )
}