import { useContext, useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';

const INITIAL_STATE = {
  theme: JSON.parse(localStorage.getItem('theme')) || 'light',
};

const AppContext = createContext();

const reducers = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', JSON.stringify(state.theme));
  }, [state.theme]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
