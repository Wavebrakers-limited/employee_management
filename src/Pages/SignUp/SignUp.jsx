import styles from './SignUp.module.css'
import {BiSolidUser,BiCalendar,BiConfused,BiPhone} from "react-icons/bi";
import welcome from "./assests/Welcome.svg"
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
  const navigate=useNavigate()
  return (
    <div className={styles.signUp}>
    <div>
      <h1>Fill these up, Breakers</h1>
      <hr />
      <div className={styles.signUpForm}>
          <div>
              <input type="text" id='email' placeholder='Email' /><label htmlFor="email"><BiSolidUser color='#86A789'/></label>
              <input type="date" id='dob' placeholder='Date of birth' /><label htmlFor="dob"><BiCalendar color='#86A789'/></label>
              <input type="date" id='Joining' placeholder='Date of Joining' /><label htmlFor="Joining"><BiCalendar color='#86A789'/></label>
              <select name="Gender" id="gender" >
                <option value="Gender" disabled selected hidden>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select><label htmlFor="gender"><BiConfused color='#86A789'/></label>
              <input type="number" id='Pno' placeholder='Phone Number' /><label htmlFor="Pno"><BiPhone color='#86A789'/></label>
              <select name="Designation" id="Designation">
                <option value="Designation" disabled selected hidden>Designation</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="QA Testers">QA Testers</option>
                <option value="Bot Developer">Bot Developer</option>
                <option value="Marketting">Marketting</option>
              </select><label htmlFor="Designation"><BiConfused color='#86A789'/></label>
              
              
              <button onClick={()=>{
                navigate('/signin')
              }}>SignUp</button>
          </div>
          <img src={welcome} alt="" />
      </div>
 
    </div>
  </div>
  )
}
