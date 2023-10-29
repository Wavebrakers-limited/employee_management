import SignIn from "./Pages/SignIn/SignIn"
import Welcome from "./Pages/Welcome/Welcome"
import SignUp from "./Pages/SignUp/SignUp"
import Super from "./Pages/SuperUser/Super"
import Manager from "./Pages/Manager/Manager"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Employee from "./Pages/Employee/Employee"
import Error404 from "./Pages/error404"

function App() {

  return (
    <div>
          <Routes>
                <Route  path='/' element={<Welcome />}></Route>
                <Route exact path='/signup' element={< SignUp />}></Route>  
                <Route exact path='/signin' element={< SignIn />}></Route>
                <Route exact path='/dashboard/super' element={<Super/>}></Route>
                <Route exact path='/dashboard/manager' element={<Manager/>}></Route>
                <Route exact path='/dashboard/employee' element={<Employee/>}></Route>
                <Route exact path='*' element={<Error404/>}></Route>
          </Routes>              
    </div>
  )
}

export default App
