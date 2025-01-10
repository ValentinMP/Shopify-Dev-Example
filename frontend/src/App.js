import Header from "./components/header"
import Footer from "./components/footer"
import { Outlet } from "react-router-dom"
const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Outlet />
    </main>
    <Footer />  
    </>
  )
}

export default App