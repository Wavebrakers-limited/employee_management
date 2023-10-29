import styles from './Manager.module.css'
import Employee from '../Employee_data/Employee'
// import AssignTask from '../AssignTask/assignTask'

export default function Manager() {
  return (
    <div className={styles.main}>
    {/* sidebar section */}
    <div className={styles.sidebar}>
    <div className={styles.logo}>WaveBreakers</div>
    <div className={styles.selection}>
       <ul>
            <li>Employee Data</li>
            <li>Assign Duty</li>
            <li>Leave Approval</li>
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
       <Employee/>
       {/* <AssignTask/> */}
    </div> 
  </div>
  )
}
