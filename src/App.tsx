import Navbar from "./components/navbar/Navbar.tsx";
import DotBackground from "./components/background/DotBackground.tsx";

function App() {
  return (
      <div id="top" className="relative w-full">
          <DotBackground/>
          <Navbar/>
          <main id="main">
          </main>
      </div>
  )
}

export default App
