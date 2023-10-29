import styles from './Manager.module.css';
import Employee from '../Employee_data/Employee';
import AssignTask from '../AssignTask/assignTask';
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';

export default function Manager() {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);

  return (
    <div className={styles.main}>
      {/* sidebar section */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>WaveBreakers</div>
        <div className={styles.selection}>
          <ul>
            <li onClick={() => setSelectedTab('Employee Data')}>Employee Data</li>
            <li onClick={() => setSelectedTab('Assign Duty')}>Assign Duty</li>
            <li onClick={() => setSelectedTab('Leave Approval')}>Leave Approval</li>
            <li onClick={() => setSelectedTab('Leave Sanction')}>Leave Sanction</li>
          </ul>
        </div>
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
        {selectedTab === 'Employee Data' && <Employee />}
        {selectedTab === 'Assign Duty' && <AssignTask />}
        {selectedTab === 'Leave Approval' && <Coming />}
        {selectedTab === 'Leave Sanction' && <Coming />}
        
      </div>
    </div>
  );
}
