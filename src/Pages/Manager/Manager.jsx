import styles from './Manager.module.css';
import Employee from '../Employee_data/Employee';
import AssignTask from '../AssignTask/assignTask';
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';
import { useAuth } from '../authChecker';
import { Link } from 'react-router-dom';import EmpProfile from '../../Pages/Manager/Emplyee_data/empProf'


function Manager() {
  const { isAuthenticated, userRole } = useAuth();
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);
  console.log(selectedTab);
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

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
            <li onClick={() =>  handleTabClick('Employee')}>Employee Data</li>
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

        {selectedTab === 'Employee' && <Employee />}
        {selectedTab === 'Assign Duty' && <AssignTask />}
        {selectedTab === 'Leave Approval' && <Coming />}
        {selectedTab === 'Leave Sanction' && <Coming />}
        {selectedTab === 'EmpProfile' && <EmpProfile />}
        
      </div>
    </div>
  );
}

export default Manager;