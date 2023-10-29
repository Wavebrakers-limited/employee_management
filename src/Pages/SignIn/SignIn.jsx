import { useState, useEffect } from 'react';
import styles from './SignIn.module.css';
import { BiSolidUser } from 'react-icons/bi';
import { BiSolidLock } from 'react-icons/bi';
import welcome from '../Welcome/assests/Welcome.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authenticatedState } from '../../../recoilState';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(authenticatedState);
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const params = {
        user_email: email,
      };
      const config = {
        method: 'POST',
        params: params,
      };
      const response = await axios('https://gta-ems.onrender.com/admin_user/auth/login/', config);

      if (response.status === 200) {
        const UserRole = response.data.user_role;
        setUserRole(UserRole); // Update userRole state
      }
    } catch (error) {
      console.error('An error occurred during the authentication process', error);
    }
  };

  useEffect(() => {
    if (userRole) {
      handleNavigation(userRole);
    }
  }, [userRole]);

  const handleNavigation = (UserRole) => {
    const isAuthenticated = {
      isAuthenticated: true,
      userRole: UserRole,
    };
    
    setIsAuthenticated(isAuthenticated);

    if (UserRole === 'employee') {
      navigate('/dashboard/employee');
    } else if (UserRole === 'manager') {
      navigate('/dashboard/manager');
    } else if (UserRole === 'superadmin') {
      navigate('/dashboard/super');
    } else {
      console.error('Unknown user role');
    }
  };

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