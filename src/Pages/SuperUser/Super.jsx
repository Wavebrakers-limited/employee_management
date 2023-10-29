// import Employee from '../Employee_data/Employee'
// import AssignTask from '../AssignTask/assignTask'
import EmpProfile from './Emp_profile/empProf'
import styles from './Super.module.css'
function Super() {
  return (
    <div className={styles.main}>
      {/* sidebar section */}
      <div className={styles.sidebar}>
      <div className={styles.logo}>WaveBreakers</div>
      <div className={styles.selection}>
         <ul>
              <li>Employee Data</li>
              <li>Assign Duty</li>
              <li>Manager Select</li>
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
        {/* <Employee/> */}
        {/* <AssignTask/> */}
        <EmpProfile/>
        </div> 
    </div>
  )
}

export default Super
