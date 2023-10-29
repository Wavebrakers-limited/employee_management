import styles from "./empProf.module.css"
import profile from "./assests/profile.svg"
import {RiDeleteBin6Fill} from "react-icons/ri";
import {IoArrowBackCircleOutline} from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import { Employee_data, Employee_id } from "../../../../recoilState";
import { selectedProfileState } from "../../../../recoilState";
export default function EmpProfile() {
const[selectedProfile , setSelectedProfile]=useRecoilState(selectedProfileState);
  const Userdata=useRecoilValue(Employee_data);
  const id=useRecoilValue(Employee_id);
  const user=Userdata[id];
    return (
    <div className={styles.empProfile}>
      <div className={styles.Container} >
        <div>
            <button onClick={()=>{
              setSelectedProfile("Employee");
            }}><IoArrowBackCircleOutline size={35}/></button>
            <div className={styles.profile}>
            <img src={profile} alt="" />
            <button><RiDeleteBin6Fill size={25} color="red"/></button>
            </div>     
        </div>
        <div className={styles.ContainerContent}>
        <div>
            <h2>Name: </h2>
            <p>{user.name}</p>
        </div>
        <div>
            <h2>Role: </h2>
            <p>Manager</p>
        </div>
        <div>
            <h2>Department: </h2>
            <p>Software team -1</p>
        </div>
        <div>
            <h2>Designation: </h2>
            <p>{user.designation}</p>
        </div>
        <div>
            <h2>Date of Joining: </h2>
            <p>{user.date_of_joining}</p>
        </div>
        <div>
            <h2>Phone Number: </h2>
            <p>{user.phone_number}</p>
        </div>
        

        </div>
      </div>
    </div>
  )
}
