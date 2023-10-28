import styles from './assignTask.module.css'
import {ImPlus} from 'react-icons/im';
import Card from '../../Components/Project_cards/pCard'
export default function assignTask() {
  return (
    <div className={styles.assignTask}>
      <div className={styles.createNew}>
        <button><ImPlus size={15}/> Create</button>
      </div>
      <div className={styles.Container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
