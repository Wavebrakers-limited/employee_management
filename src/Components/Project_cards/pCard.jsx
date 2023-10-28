import styles from './pCard.module.css'
import { FaCircle } from "react-icons/fa";

export default function pCard() {
  return (
    <div className={styles.pCard}>
      <h1>Project Name</h1>
      <div>
        <h2>Lead:</h2>
        <p>NandKishore R</p>
      </div>
      <div>
        <h2>Deadline</h2>
        <p>25/10/23</p>
      </div>
      <div className={styles.status}>
        <p><FaCircle size={10} color='#fff'/> Active</p>
      </div>
    </div>
  )
}
