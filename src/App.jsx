
import {createRoutesFromElements, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="registration" element={<Registration/>}/>
      <Route path="login" element={<Login/>}/>
    </Route>
  )
);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
