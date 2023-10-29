
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
// Create an atom to manage the selectedProfile state
export const selectedProfileState = atom({
  key: 'selectedProfileState', 
  default: 'Employee' ,

});

export const authenticatedState = atom({
  key: 'authenticatedState',
  default: {
    isAuthenticated: false,
    userRole: '',
  },
  effects_UNSTABLE: [persistAtom],
  });

  export const Employee_id = atom({
    key: 'Id',
    default: "",
    effects_UNSTABLE: [persistAtom],
    });
    export const Employee_data = atom({
      key: 'Employee_data',
      default: [],
      effects_UNSTABLE: [persistAtom],
      });