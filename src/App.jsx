import { HashRouter, Routes, Route } from "react-router-dom"
import flowerLogo from './assets/FlowerLogo.svg'
import Swirl from './assets/swirl.svg'
import { ToolContainer } from './components/Tool'  // add this
import { SOCIAL } from './components/toolconfig'
import GameDev from './pages/GameDev'
import ToolsUI from './pages/ToolsUI'
import Frontend from './pages/Frontend'
import GraphicDesign from './pages/GraphicDesign'
import './tools.css'

// Landing page — links to internal pages
function Home() {
  return (
    <section id="top">
      <div className="header">
        <h1>
          Elijah Flowers
          <img
            src={flowerLogo}
            className="base"
            width="70"
            height="70"
            alt=""
            style={{
              marginBottom: '10px',
              marginLeft: '20px',
              verticalAlign: 'middle',
              filter: 'drop-shadow(3px 3px 1px #000000)',
            }}
          />
        </h1>
      </div>
      {/* ToolContainer uses default TOOLS (internal routes) + SOCIAL */}
      <ToolContainer social={SOCIAL} />
    </section>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/game-dev" element={<GameDev />} />
        <Route path="/tools-ui" element={<ToolsUI />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path ="/graphic-design" element={<GraphicDesign />} />
      </Routes>
    </HashRouter>
  )
}