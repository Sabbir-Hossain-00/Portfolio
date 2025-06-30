import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { Home } from "../pages/Home/Home"

export const MainLayout = ()=>{
    return(
        <>
          <nav className=" sticky top-0 left-0 w-full z-50">
             <Navbar/>
          </nav>
          <main >
             <Home/>
          </main>
          <footer>
             <Footer/>
          </footer>
        </>
    )
}