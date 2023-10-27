import styles from './Welcome.module.css'
import welcome from './assests/welcome.svg'

export default function Welcome() {
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
             <button>SignIn</button>
           </div>
           <div>
             <button>SignUp?</button>
           </div>
        </div>
    </div>
      
  )
}
