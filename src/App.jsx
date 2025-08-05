import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/home"
import Portfolio from "./components/portfolio/Portfolio"
import Nav from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"


function App () {


const router = createBrowserRouter(
  [
      { index:true, element: <Home /> }  ,
      { path:"home" , element: <Home /> } ,
      { path:"about" , element: <About/> } ,
      { path:"portfolio" , element: <Portfolio /> } ,
      { path:"contact" , element: <Contact /> },
      { path: "*" , element: <h1>4 0 4 NOT FOUND</h1> }

  ]
);


  return (
    <>

    <RouterProvider router={router}/>
    {/* <Footer /> */}
    </>
  )
}

export default App
