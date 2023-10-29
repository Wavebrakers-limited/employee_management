import { useRecoilValue } from 'recoil';
import { authenticatedState } from '../../recoilState';

export function useAuth() {
  const auth = useRecoilValue(authenticatedState);
  return auth;
}
