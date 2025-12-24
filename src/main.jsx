import { createRoot } from "react-dom/client"
import Header from "./components/Header.jsx"
import MainContent from "./components/MainContent.jsx"

const root = createRoot(document.getElementById("root"))

function Page() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

root.render(
  <Page />
)
