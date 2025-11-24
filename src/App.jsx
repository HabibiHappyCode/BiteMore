import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NormalRootLayouts from "./roots/NormalRootLayouts"
import Home from "./pages/HomePage/Home"
import Services from "./pages/ServicesPage/Services"
import Menu from "./pages/MenuPage/Menu"
import Blog from "./pages/BlogPage/Blog"
import Contact from "./pages/ContactPage/Contact"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <NormalRootLayouts />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'services',
          element: <Services />
        },
        {
          path: 'Menu',
          element: <Menu />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
