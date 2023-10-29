
import { atom, selector } from 'recoil';

// Create an atom to manage the selectedProfile state
export const selectedProfileState = atom({
  key: 'selectedProfileState', 
  default: 'Employee', 
});
