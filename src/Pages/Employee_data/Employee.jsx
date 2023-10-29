import { useEffect, useState} from 'react';
import Card from '../../Components/Employee_card/Card';
import styles from './Employee.module.css';
import { ImPlus } from 'react-icons/im';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { Employee_data } from '../../../recoilState';
import { useDisclosure } from '@chakra-ui/react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const titlestyle={
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: '#419c62',
  fontSize: '20px',
  fontWeight: '700',
  }

function Employee() {
  const [employeeData, setEmployeeData] = useRecoilState(Employee_data);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date_of_joining, setDate] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone] = useState('');
  const [gender, setGender] = useState('');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };
  
  async function fetchEmployeeData() {
    const response = await axios.get(`https://gta-ems.onrender.com/employee_mng/get/all/`);
    return response.data.all_employees;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchEmployeeData();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const addEmployee = () => {
   
    const newEmployee = { name,age,date_of_joining,designation,email,phone_number,gender };
    const headers = {
      'Content-Type': 'application/json',
    };
    axios.post('https://your-api-endpoint.com/employee/add', newEmployee, { headers })
      .then(response => {
        console.log('Employee added:', response.data);
      })
      .catch(error => {
        console.error('Error adding employee:', error);
      });
      onClose();
    }


  return (
    <div className={styles.main_pg}>
      <div className={styles.createNew}>
      <button onClick={onOpen}>
          <ImPlus size={15} /> Create
        </button>
      </div>
      <div className={styles.container}>
      {employeeData && employeeData.length > 0 ? (
  employeeData.map((employee, _id) => (
  
    <Card key={_id} id={_id} employee={employee} />
  ))
) : (
  <div style={titlestyle}>No employee data available...</div>
)}
      </div>
      <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Add a Employee details
          </Typography>
          <TextField
              sx={{ mb: 2, width: '38ch' }}
              required
              label="Name"
              placeholder='Name'
              variant="standard"
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              required
              label="Designation"
              placeholder='Backend Developer'
              variant="standard"
              onChange={e => setDesignation(e.target.value)}
              value={designation}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              label="Date of Joining"
              required
              type="date"
              variant="standard"
              onChange={e => setDate(e.target.value)}
              value={date_of_joining}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              label="Email"
              required
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
              variant="standard"
              value={email}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              label="Phone Number"
              required
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Phone Number'
              onChange={e => setPhone(e.target.value)}
              variant="standard"
              value={phone_number}
            />
             <TextField
              sx={{ mb: 2, width: '38ch' }}
              label="Age"
              required
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Age'
              onChange={e => setAge(e.target.value)}
              variant="standard"
              value={age}
            />
            <TextField
              sx={{ mb: 2, width: '38ch' }}
              label="Gender"
              required
              InputLabelProps={{
                shrink: true,
              }}
              placeholder='Male/Female'
              onChange={e => setGender(e.target.value)}
              variant="standard"
              value={gender}
            />
          <Button sx={{ width: '100px', float: 'right' }} onClick={addEmployee} variant="contained">
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );

}
export default Employee;
