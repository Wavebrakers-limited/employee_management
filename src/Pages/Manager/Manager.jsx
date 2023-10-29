import styles from './Manager.module.css';
import Employee from '../Employee_data/Employee';
import AssignTask from '../AssignTask/assignTask';
import { selectedProfileState } from '../../../recoilState';
import { useRecoilState } from 'recoil';
import Coming from '../../Components/Coming_Soon/Coming';
import { useAuth } from '../authChecker';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useDisclosure } from '@chakra-ui/react';
// import EmpProfile from '../../Pages/Manager/Emplyee_data/empProf'
import EmpProfile from '../SuperUser/Emp_profile/empProf';

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
function Manager() {
  const { isAuthenticated, userRole } = useAuth();
  const [selectedTab, setSelectedTab] = useRecoilState(selectedProfileState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const Navigate = useNavigate();
  console.log(selectedTab);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  if (!isAuthenticated || userRole !== 'manager') {
    return <><div style={{color:'#86A789',top:'50%',left:'28%',position:'absolute',fontSize:"2rem"}}>Error ! You do not have permission to access this page.</div>
    <div style={{color:'#86A789',top:'57%',left:'28%',position:'absolute',fontSize:"1.4rem"}}>Go back to <Link to="/signin">Signin</Link></div></>}

  const UserLogout = () => {
    localStorage.clear();
    window.location.reload();
    onClose();
  }
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
          <div onClick={onOpen} className={styles.image}></div>
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

export default Manager;