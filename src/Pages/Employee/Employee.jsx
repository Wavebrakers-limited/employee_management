import styles from './Employee.module.css'
import EmpData from '../Employee_data/Emp_profile/empProfile'
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';
import { useEffect } from 'react';
import { useAuth } from '../authChecker';
import { Link } from 'react-router-dom';
export default function Employee() {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  useEffect(() => {
    setSelectedTab('Profile');
  }, [setSelectedTab]);

  const { isAuthenticated, userRole } = useAuth();
  if (!isAuthenticated || userRole !== 'employee') {
    return <><div style={{color:'#86A789',top:'50%',left:'28%',position:'absolute',fontSize:"2rem"}}>Error ! You do not have permission to access this page.</div>
    <div style={{color:'#86A789',top:'57%',left:'28%',position:'absolute',fontSize:"1.4rem"}}>Go back to <Link to="/signin">Signin</Link></div></>}

  return (
    <div className={styles.main}>
      {/* sidebar section */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>WaveBreakers</div>
        <div className={styles.selection}>
          <ul>
            <li onClick={() => handleTabClick('Profile')}>Profile</li>
            <li onClick={() => handleTabClick('Leave')}>Leave Sanction</li>
          </ul>
        </div>
        <div className={styles.userbox}>
          <div className={styles.image}></div>
          <div className={styles.user}>
            <div className={styles.username}>Rohan Mano</div>
            <div className={styles.role}>Employee</div>
          </div>
        </div>
      </div>
      {/* content section */}
      <div className={styles.container}>
        {selectedTab === 'Profile' && <EmpData />}
        {selectedTab === 'Leave' && <Coming />}
      </div>
    </div>
  );
}
