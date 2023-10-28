import styles from './card.module.css'
import welcome from './assests/Welcome.svg'
export default function Card() {
  return (
    <div className={styles.card}>
      <div>
        <img src={welcome} alt="" />
        <h1>NandKishore R</h1>
      </div>
      <div className={styles.cardDesignation}>
        <div>
        <h2>Designation:</h2>
        <p>Manager</p>
        </div>
        <div>
          <h2>Department:</h2>
          <p>Software team -1</p>
        </div>
      </div>
      <button>Check Profile</button>
    </div>
  )
}
