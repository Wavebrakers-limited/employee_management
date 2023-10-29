
import { atom, selector } from 'recoil';

// Create an atom to manage the selectedProfile state
export const selectedProfileState = atom({
  key: 'selectedProfileState', 
  default: 'Employee' 
});

export const authenticatedState = atom({
  key: 'authenticatedState',
  default: {
    isAuthenticated: false,
    userRole: '',
  },
  });
