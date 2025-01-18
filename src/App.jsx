import NavBar from "./assets/components/sections/NavBar";
import Timer from "./assets/components/sections/Timer";

function App() {

  return (
    <>
      <NavBar />
      <main className="flex flex-col">
        <Timer />
      </main>
    </>
  )
}

export default App
