import styles from './Manager.module.css';
import Employee from '../Employee_data/Employee';
import AssignTask from '../AssignTask/assignTask';
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';
import { useAuth } from '../authChecker';
import { Link } from 'react-router-dom';
export default function Manager() {
  const { isAuthenticated, userRole } = useAuth();
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);
  console.log(selectedTab);

  if (!isAuthenticated || userRole !== 'manager') {
    return <><div style={{color:'#86A789',top:'50%',left:'28%',position:'absolute',fontSize:"2rem"}}>Error ! You do not have permission to access this page.</div>
    <div style={{color:'#86A789',top:'57%',left:'28%',position:'absolute',fontSize:"1.4rem"}}>Go back to <Link to="">Signin</Link></div></>}
  return (
    <div className={styles.main}>
      {/* sidebar section */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>WaveBreakers</div>
        <div className={styles.selection}>
          <ul>
            <li onClick={() => setSelectedTab('Employee')}>Employee Data</li>
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

        {selectedTab === 'Employee' && <Employee />}
        {selectedTab === 'Assign Duty' && <AssignTask />}
        {selectedTab === 'Leave Approval' && <Coming />}
        {selectedTab === 'Leave Sanction' && <Coming />}
        
      </div>
    </div>
  );
}
