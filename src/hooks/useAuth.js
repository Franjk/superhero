import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useAuth() {
  const localToken = window.localStorage.getItem('token');
  const history = useHistory();
  const [token, setToken] = useState(localToken);

  const logIn = (tkn) => {
    window.localStorage.setItem('token', tkn);
    setToken(tkn);
  };

  const logOut = () => {
    window.localStorage.setItem('token', '');
    setToken('');
  };

  const redirectToLogIn = () => {
    history.push('/login');
  };

  const isAuth = () => {
    if (token) return true;
    return false;
  };

  return {
    token, logIn, logOut, isAuth, redirectToLogIn,
  };
}
