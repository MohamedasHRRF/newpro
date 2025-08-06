import { createHashRouter, RouterProvider } from "react-router-dom"
import About from "./components/about/About"
import Contact from "./components/contact/Contact";
import Home from "./components/home/home";
import Portfolio from "./components/Portfolio/Portfolio";
import Layout from "./components/layout/Layout";

function App () {


const router = createHashRouter([

  { path:"" , element: <Layout/>, children: [
    {index: true, element: <Home /> },
    {path: "start framework", element: <Home />}, 
    {path: "about", element: <About /> },
    {path: "portfolio", element: <Portfolio /> },
    {path: "contact", element: <Contact /> },
    {path: "*", element: <h1>4 0 4 NOT FOUND</h1> },
  ]},
]);


  return (
    <>

    <RouterProvider router={router}/>
    </>
  )
}

export default App
