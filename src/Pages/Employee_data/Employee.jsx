import React, { useEffect, useState } from 'react';
import Card from '../../Components/Employee_card/Card';
import styles from './Employee.module.css';
import { ImPlus } from 'react-icons/im';
import axios from 'axios';
const titlestyle={
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: '#419c62',
  fontSize: '20px',
  fontWeight: '700',
  }
  
function Employee() {
  const [employeeData, setEmployeeData] = useState([]);
  
  async function fetchEmployeeData() {
    const response = await axios.get(`https://gta-ems.onrender.com/employee_mng/get/all/`);
    return response.data.all_employees;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchEmployeeData();
        setEmployeeData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.main_pg}>
      <div className={styles.createNew}>
        <button>
          <ImPlus size={15} /> Create
        </button>
      </div>
      <div className={styles.container}>
      {employeeData && employeeData.length > 0 ? (
  employeeData.map((employee, _id) => (
    console.log(_id),
    <Card key={_id} employee={employee} />
  ))
) : (
  <div style={titlestyle}>No employee data available...</div>
)}

      </div>
    </div>
  );
}

export default Employee;

