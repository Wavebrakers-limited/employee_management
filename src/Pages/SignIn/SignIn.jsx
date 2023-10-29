import { useState } from 'react';
import styles from './SignIn.module.css'
import {BiSolidUser} from "react-icons/bi";
import {BiSolidLock} from "react-icons/bi"
import welcome from '../Welcome/assests/Welcome.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = async () => {
    try {
   // Define headers and parameters
// const headers = {
//   'Authorization': 'Bearer your-token', // Example: If you have an authorization token
//   'Content-Type': 'application/json', // Example: Content-Type header
// };

const params = {
  user_email: email, // Example query parameter
};

// Define the request configuration
const config = {
  method: 'POST', // Specify the HTTP method (e.g., GET, POST, PUT, DELETE)
  // headers: headers, // Pass the headers object
  params: params,   // Pass the params object
};
      const response = await axios(`https://gta-ems.onrender.com/admin_user/auth/login/`,config);
      // const response = await fetch('https://gta-ems.onrender.com/admin_user/auth/get_all/',requestOptions);
      console.log(response);
      if (response.status === 200) {
        const userRole = response.data.user_role;
        console.log(userRole);

        // Navigate to the appropriate dashboard based on the user's role.
        if (userRole === 'employee') {
          navigate('/dashboard/employee');
        } else if (userRole === 'manager') {
          navigate('/dashboard/manager');
        } else if (userRole === 'superadmin') {
          navigate('/dashboard/super');
        } else {
          console.error('Unknown user role');
        }
      } else {
        // Authentication failed, handle the error as needed.
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('An error occurred during the authentication process', error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className={styles.signIn}>
      <div>
        <h1>Fill these up, Breakers</h1>
        <hr />
        <div className={styles.signInForm}>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">
              <BiSolidUser color="#86A789" />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">
              <BiSolidLock color="#86A789" />
            </label>
            <button onClick={handleSignIn}>SignIn</button>
          </div>
          <img src={welcome} alt="" />
        </div>
      </div>
    </div>
  );
}