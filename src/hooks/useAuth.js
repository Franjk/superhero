import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useAuth() {
  const localToken = window.localStorage.getItem('token');
  const history = useHistory();
  const [token, setToken] = useState(localToken);
  const storeToken = (tkn) => {
    window.localStorage.setItem('token', tkn);
    setToken(tkn);
  };

  const redirectIfNotAuth = () => {
    if (!token) history.push('/login');
  };

  return { token, storeToken, redirectIfNotAuth };
}
