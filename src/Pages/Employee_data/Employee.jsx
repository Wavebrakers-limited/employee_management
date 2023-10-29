import Card from '../../Components/Employee_card/Card'
import styles from './Employee.module.css'
import { ImPlus } from 'react-icons/im';

function Employee() {
  return (
    <div className={styles.main_pg}>
      <div className={styles.createNew}>
        <button >
          <ImPlus size={15} /> Create
        </button>
      </div>
        <div className={styles.container}>
            <Card />
            <Card />
            <Card/>
            <Card/>
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

export default Employee
