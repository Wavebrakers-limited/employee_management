import styles from './Employee.module.css'
import EmpData from '../Employee_data/Emp_profile/empProfile'
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';
import { useEffect } from 'react';
import { useAuth } from '../authChecker';
import Error404 from '../error404';

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
    return <Error404/>
  }

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
            <div className={styles.username}>Reo George</div>
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
