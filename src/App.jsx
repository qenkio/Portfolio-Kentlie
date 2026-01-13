import './App.css'
import Nav from './components/navbar/nav.jsx'
import Home from './pages/home/home.jsx'
import Marquee from './components/marquee/marquee.jsx'
import About from './pages/about/about.jsx'
import Project from './pages/project/project.jsx'
import Contact from './pages/contact/contact.jsx'

function App() {
  // const  useState(0)

  return (
    <>
      <Nav />
      <main>
        <Home />
        <Marquee />
        <About />
        <Project />
        <Contact />
      </main>
    </>
  )
}

export default App
