// import {BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Layout from './Layout';
import ErrorPage from "./components/ErrorPage";
import Todos from "./components/Todos"
import SingleEmployee from "./components/SingleEmployee";



/*function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        index: true,
        element: <Home/>,
      },
      {
        path: "employees/:id",
        element: <SingleEmployee/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "todos",
        element: <Todos/>,
      },
      {
        path: "*",
        element: <ErrorPage/>,
      }
    ],
  },
  
])

function App() {
  return <RouterProvider router={router}/>
  
}
export default App;
