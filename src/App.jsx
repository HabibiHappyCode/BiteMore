import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NormalRootLayouts from "./roots/NormalRootLayouts"
import Home from "./pages/HomePage/Home"
import Services from "./pages/ServicesPage/Services"
import Menu from "./pages/MenuPage/Menu"
import Blog from "./pages/BlogPage/Blog"
import Contact from "./pages/ContactPage/Contact"
import AuthFormRootLayout from "./roots/AuthFormRootLayout"
import SignIn from "./pages/authForm/SignInPage/SignIn"
import SignUp from "./pages/authForm/SignUpPage/SignUp"
import OrderNow from "./pages/orderNow/OrderNow"
import { ButtonContextProvider } from "./store/ButtonContext"
import MealDetails from "./pages/mealDetails/MealDetails"
import { CartContextProvider } from "./store/CartContext"
import Cart from "./pages/carts/Cart"
import Checkout from "./pages/checkout/Checkout"
import { ModalContextProvider } from "./store/ModalContext"
import TermsOfServices from "./pages/TermsOfServices/TermsOfServices"
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy/PrivacyAndPolicy"
import DashBoardRoot from "./roots/DashBoardRoot"
import Overview from "./DashboardPages/overview/Overview"


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
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: '/Menu/:idMeal',
          element: <MealDetails />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
        {
          path: 'orderNow',
          element: <OrderNow />
        },
        {
          path: 'termsOfServices',
          element: <TermsOfServices />
        },
        {
          path: 'privacyAndPolicy',
          element: <PrivacyAndPolicy />
        },
       
      ]
    },
    {
      path: '/auth',
      element: <AuthFormRootLayout />,
      children: [
        {
          index: true,
          element: <SignIn />
        },
        {
          path: 'signUp',
          element: <SignUp />
        }
      ]
    },
    {
      path: '/overview',
      element: <DashBoardRoot />,
      children: [
        {
          index: true,
          element: <Overview /> 
        }
      ]
    }
  ])

  return (
    <>
      <ModalContextProvider>
        <CartContextProvider>
          <ButtonContextProvider>
            <RouterProvider router={router} />
          </ButtonContextProvider>
        </CartContextProvider>
      </ModalContextProvider>
    </>
  )
}

export default App
