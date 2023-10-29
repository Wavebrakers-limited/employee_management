import styles from './Employee.module.css'
import EmpData from '../Employee_data/Emp_profile/empProfile'
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';
import { useEffect } from 'react';
import { useAuth } from '../authChecker';
import Error404 from '../error404';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#878683',
  color: '#fff',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Employee() {
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Navigate = useNavigate();
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
  const UserLogout = () => {
    localStorage.clear();
    onClose();
    Navigate("/signin")
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
          <div onClick={onOpen} className={styles.image}></div>
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

      <Modal
        open={isOpen} onClose={onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Logout</h2>
          <p id="parent-modal-description">
           Are you sure you want to logout?
          </p>
          <Button onClick={UserLogout}>Logout</Button>
        </Box>
      </Modal>
    </div>
  );
}
