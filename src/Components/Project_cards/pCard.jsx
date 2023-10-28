import styles from './pCard.module.css'
import { FaCircle } from "react-icons/fa";

export default function pCard(props) {
  return (
    <div className={styles.pCard}>
      <h1>{props.title}</h1>
      <div>
        <h2>Lead:</h2>
        <p>{props.lead}</p>
      </div>
      <div>
        <h2>Deadline</h2>
        <p>{props.date}</p>
      </div>
      <div>
        <h2>Deparment</h2>
        <p>Software team -1</p>
      </div>
      <div className={styles.status}>
        <p><FaCircle size={10} color='#fff'/>{props.status}</p>
      </div>
    </div>
  )
}
