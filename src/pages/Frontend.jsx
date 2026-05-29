import { Link } from "react-router-dom"
import { ToolContainer } from '../components/Tool'
import Binomical from '../assets/binomical.svg'

const FRONTEND_TOOLS = [
  {
    id: 1,
    title: "Binomical Data Page",
    description: "Webpage created from Figma prototypes in Next.js as part of a College Capstone project for Binomical",
    image: Binomical,
    href: "https://binomical.com/data",
  },
  {
    id: 2,
    title: "Binomical Testimonials Page",
    description: "Webpage created from Figma prototypes in Next.js as part of a College Capstone project for Binomical",
    image: Binomical,
    href: "https://binomical.com/testimonials"
  }
];

export default function Frontend() {
  return (
    <section id="top">
      <div className="header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Frontend Web Development</h1>
      </div>
      <ToolContainer tools={FRONTEND_TOOLS} />
    </section>
  )
}