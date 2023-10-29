import SignIn from "./Pages/SignIn/SignIn"
import Welcome from "./Pages/Welcome/Welcome"
import SignUp from "./Pages/SignUp/SignUp"
import Super from "./Pages/SuperUser/Super"
// import Employee from "./Pages/Employee/Employee"
// import Manager from "./Pages/Manager/Manager"

import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>

          <Routes>
                <Route  path='/' element={<Welcome />}></Route>
                <Route exact path='/signup' element={< SignUp />}></Route>  
                <Route exact path='/signin' element={< SignIn />}></Route>
                <Route exact path='/dashboard/super' element={< Super/>}></Route>

          </Routes>              
    </div>
  )
}

export default App
