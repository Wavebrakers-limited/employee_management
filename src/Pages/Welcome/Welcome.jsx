import styles from './Welcome.module.css'
import welcome from './assests/welcome.svg'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate=useNavigate()
  return (
    <div className={styles.Welcome} >
        <div>
            <img src={welcome} alt="" />
        </div>
        <div className={styles.welcomeVerticalBar}>

        </div>
        <div>
            <h1>Welcome <span> WaveBreakers</span></h1>
           <div>
             <button  onClick={()=>{
              navigate('/signup')
             }}>SignIn</button>
           </div>
           <div>
             <button  onClick={()=>{
              navigate('/signup')
             }}>SignUp?</button>
           </div>
        </div>
    </div>
      
  )
}
