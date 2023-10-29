import styles from './Manager.module.css';
import Employee from '../Employee_data/Employee';
import AssignTask from '../AssignTask/assignTask';
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';
import EmpProfile from '../../Pages/Manager/Emplyee_data/empProf'


function Manager() {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className={styles.main}>
      {/* sidebar section */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>WaveBreakers</div>
        <div className={styles.selection}>
          <ul>
            <li onClick={() =>  handleTabClick('Employee Data')}>Employee Data</li>
            <li onClick={() =>  handleTabClick('Assign Duty')}>Assign Duty</li>
            <li onClick={() =>  handleTabClick('Leave Approval')}>Leave Approval</li>
            <li onClick={() =>  handleTabClick('Leave Sanction')}>Leave Sanction</li>
          </ul>
        </div>
        <div className={styles.userbox}>
          <div className={styles.image}></div>
          <div className={styles.user}>
            <div className={styles.username}>Nandkishor</div>
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
        {selectedTab === 'EmpProfile' && <EmpProfile />}
        
      </div>
    </div>
  );
}

export default Manager;