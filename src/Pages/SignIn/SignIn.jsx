import styles from './SignIn.module.css'
import {BiSolidUser} from "react-icons/bi";
import {BiSolidLock} from "react-icons/bi"
import welcome from '../Welcome/assests/Welcome.svg'
import { useNavigate } from 'react-router-dom'
export default function SignIn() {
  const navigate=useNavigate()
  return (
    <div className={styles.signIn}>
      <div>
        <h1>Fill these up, Breakers</h1>
        <hr/>
        <div className={styles.signInForm}>
            <div>
                <input type="text" id='email' placeholder='Email' /><label htmlFor="email"><BiSolidUser color='#86A789'/></label>
                <input type="cpassword" id='email' placeholder='Confirm Password' /><label htmlFor="cpassword"><BiSolidLock color='#86A789'/></label>
                <button onClick={()=>{
                  navigate('/dashboard/super')
                }}>SignIn</button>
            </div>
            <img src={welcome} alt="" />
        </div>
   
      </div>
    </div>
  )
}
