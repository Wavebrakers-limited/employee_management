import styles from './Employee.module.css'
import EmpData from '../Employee_data/Employee'

export default function Employee() {
  return (
    <div className={styles.main}>
    {/* sidebar section */}
    <div className={styles.sidebar}>
    <div className={styles.logo}>WaveBreakers</div>
    <div className={styles.selection}>
       <ul>
            <li>Profile</li>
            <li>Leave Sanction</li>
       </ul></div>
     <div className={styles.userbox}>
      <div className={styles.image}></div>
      <div className={styles.user}>
          <div className={styles.username}>Rohan Mano</div>
          <div className={styles.role}>Manager</div>
      </div>
      </div>  
    </div>
    {/* content section */}
    <div className={styles.container}>
     <EmpData/>
    </div> 
  </div>
  )
}
