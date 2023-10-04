/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useReducer } from 'react';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };

    case 'logout':
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error('Unknown action');
  }
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER });
    }
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext was used outside AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
