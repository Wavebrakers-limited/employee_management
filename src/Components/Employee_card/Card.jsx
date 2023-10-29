import styles from './Card.module.css'
import welcome from './assests/Welcome.svg'
import { useRecoilState } from 'recoil';
import { selectedProfileState } from '../../../recoilState';
export default function Card() {
  const [selectedProfile, setSelectedProfile] = useRecoilState(selectedProfileState);
  
  const selectProfile= ()=>{
    setSelectedProfile('EmpProfile')
  }
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
      <button onClick={selectProfile}>Check Profile</button>
    </div>
  )
}
