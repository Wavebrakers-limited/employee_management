import styles from "./empProfile.module.css"
import profile from "./assests/profile.svg"
import {RiDeleteBin6Fill} from "react-icons/ri";

export default function empProfile() {
  return (
    <div className={styles.empProfile}>
      <div className={styles.Container} >
        <div>
            <img src={profile} alt="" />
            <button><RiDeleteBin6Fill size={25} color="red"/></button>
        </div>
        <div className={styles.ContainerContent}>
        <div>
            <h2>Name: </h2>
            <p>Nandkishor</p>
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
            <p>Bot Developer</p>
        </div>
        <div>
            <h2>Date of Joining: </h2>
            <p>12/12/2017</p>
        </div>
        <div>
            <h2>Phone Number: </h2>
            <p>198765434</p>
        </div>
        

        </div>
      </div>
    </div>
  )
}
