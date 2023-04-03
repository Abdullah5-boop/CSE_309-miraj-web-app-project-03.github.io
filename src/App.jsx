// import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Menu from "./components/Menu/Menu"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/menu",
      element: <Menu />
    },

  ])

  return (
    <div className="App px-20">
      <RouterProvider router={router} />

    </div>
  )
}

export default App
