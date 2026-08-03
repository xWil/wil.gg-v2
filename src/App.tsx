import Navbar from "./components/navbar/Navbar.tsx";

function App() {
  return (
      <div id="top" className="relative w-full">
          <Navbar/>
          <main id="main">
              <h1 className="text-3xl font-bold text-[#FF5555]">Hello world</h1>
          </main>
      </div>
  )
}

export default App
