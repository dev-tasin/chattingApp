
import {createRoutesFromElements, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import firebaseConfig from "./components/Authentication/firebase.config";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Registration />} />
      <Route path="registration" element={<Registration/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="forgotpassword" element={<ForgotPassword/>}/>
      <Route path="home" element={<Home/>}/>
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
