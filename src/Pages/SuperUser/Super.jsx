import Employee from '../Employee_data/Employee';
import AssignTask from '../AssignTask/assignTask';
import Coming from '../../Components/Coming_Soon/Coming'
import styles from './Super.module.css';
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import EmpProfile from './Emp_profile/empProf';
import { useAuth } from '../authChecker';
import { Link } from 'react-router-dom';
function Super() {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const { isAuthenticated, userRole } = useAuth();
  if (!isAuthenticated || userRole !== 'superadmin') {
    return <><div style={{color:'#86A789',top:'50%',left:'28%',position:'absolute',fontSize:"2rem"}}>Error ! You do not have permission to access this page.</div>
    <div style={{color:'#86A789',top:'57%',left:'28%',position:'absolute',fontSize:"1.4rem"}}>Go back to <Link to="/signin">Signin</Link></div></>}
  return (
    <div className={styles.main}>
      {/* sidebar section */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>WaveBreakers</div>
        <div className={styles.selection}>
          <ul>
            <li onClick={() => handleTabClick('Employee')}>Employee Data</li>
            <li onClick={() => handleTabClick('AssignTask')}>Assign Duty</li>
            <li onClick={() => handleTabClick('ManagerSelect')}>Manager Select</li>
            <li onClick={()=>handleTabClick('LeaveApproval')}>Leave Approval</li>
          </ul>
        </div>
        <div className={styles.userbox}>
          <div className={styles.image}></div>
          <div className={styles.user}>
            <div className={styles.username}>Noel Paul George</div>
            <div className={styles.role}>SuperAdmin</div>
          </div>
        </div>
      </div>
      {/* content section */}
      <div className={styles.container}>
        {selectedTab === 'Employee' && <Employee />}
        {selectedTab === 'AssignTask' && <AssignTask />}
        {selectedTab === 'ManagerSelect' && <Employee />}
        {selectedTab === 'EmpProfile' && <EmpProfile />}
        {selectedTab === 'LeaveApproval' && <Coming />}
      </div>
    </div>
  );
}

export default Super;
