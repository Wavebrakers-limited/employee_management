import Employee from '../Employee/Employee'
import styles from './Super.module.css'
function Super() {
  return (
    <div className={styles.main}>
      {/* sidebar section */}
      <div className={styles.sidebar}>
      <div className={styles.logo}>Sandy Cheeks</div>
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
      <div className={styles.container}><Employee/></div>
      
    </div>
  )
}

export default Super
