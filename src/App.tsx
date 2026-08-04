import DotBackground from "./components/background/DotBackground.tsx";
import About from "./components/home/About.tsx"
import Navbar from "./components/navbar/Navbar.tsx";

function App() {
    /*
    document.addEventListener("DOMContentLoaded", function() {
        const toReplace = document.querySelectorAll<HTMLElement>('[replace-on-load]');
        toReplace.forEach((element) => {
            const replaceData = element.dataset.replace;
            if (!replaceData) return;

            const replacements: Record<string, string> = JSON.parse(replaceData.replace(/'/g, '"'));
            Object.entries(replacements).forEach(([oldClass, newClass]) => {
               element.classList.remove(oldClass);
               element.classList.add(newClass);
            });
        });
    });
     */
  return (
      <div id="top" className="relative w-full">
          <DotBackground/>
          <Navbar/>
          <main id="main" className="h-fit">
              <About/>
          </main>
      </div>
  )
}

export default App
