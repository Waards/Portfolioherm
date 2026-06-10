import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import ProjectsPage from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function Overlays() {
  return (
    <>
      <div className="bg-overlay-white" />
      <div className="bg-overlay-multiply" />
      <canvas className="pointer-events-none fixed inset-0 size-full" style={{ mixBlendMode: 'color-dodge', zIndex: 101 }} />
      <div className="bg-gradient-lighten" />
      <canvas className="pointer-events-none fixed inset-0 size-full" style={{ mixBlendMode: 'difference', zIndex: 201 }} />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Overlays />
      <main>
        <style>{`small { font-size: 1.0625rem } code { font-size: 0.875rem }`}</style>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </HashRouter>
  )
}
