import React from 'react';
import welcome from './assests/Welcome.svg';
import { useRecoilState } from 'recoil';
import { selectedProfileState } from '../../../recoilState';
import styles from './Card.module.css';

export default function Card({ employee }) {
  const [selectedProfile, setSelectedProfile] = useRecoilState(selectedProfileState);

  const selectProfile = () => {
    setSelectedProfile('EmpProfile');
  }

  return (
    <div className={styles.card}>
      <div>
        <img src={welcome} alt="" />
        <h1>{employee.name}</h1>
      </div>
      <div className={styles.cardDesignation}>
        <div>
          <h2>Designation:</h2>
          <p>{employee.designation}</p>
        </div>
        <div>
          <h2>Date of Joining:</h2>
          <p>{employee.date_of_joining}</p>
        </div>
      </div>
      <button onClick={selectProfile}>Check Profile</button>
    </div>
  )
}
