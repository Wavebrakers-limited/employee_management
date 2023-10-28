import SignIn from "./Pages/SignIn/SignIn"
import Welcome from "./Pages/Welcome/Welcome"
import SignUp from "./Pages/SignUp/SignUp"
import Super from "./Pages/SuperUser/Super"
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>

          <Routes>
                <Route  path='/' element={<Welcome />}></Route>
                <Route exact path='/signup' element={< SignUp />}></Route>  
                <Route exact path='/signin' element={< SignIn />}></Route>
                <Route exact path='/dashboard' element={< Super/>}></Route>
          </Routes>              
    </div>
  )
}

export default App