import Login from "./pages/login/Login";
import "./app.scss"
import Register from "./pages/register/Register";
import {createBrowserRouter, Outlet, RouterProvider, Navigate} from "react-router-dom"
import Navbar from "./component/navbar/Navbar";
import Leftbar from "./component/leftbar/Leftbar";
import Rightbar from "./component/rightbar/Rightbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";


function App() {

  const {currentUser} = useContext(AuthContext)
  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode)

  const Layout =()=>{
    return(
      <div className={`theme-${darkMode ? 'dark' : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <Leftbar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }
 

  const router = createBrowserRouter([
    {path: '/', element: <ProtectedRoute><Layout /></ProtectedRoute> ,
      children: [
        {index: true, element: <Home/>},
        {path:'/profile/:id', element:<Profile/>}
      ] 
    },
    {path:"/login", element : <Login/>},
    {path:"/register", element: <Register/>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
