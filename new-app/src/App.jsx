// import {BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Layout from './Layout';
import ErrorPage from "./components/ErrorPage";



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
        index: true,
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
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
