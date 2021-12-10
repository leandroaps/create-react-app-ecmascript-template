import { createContext, useMemo, useReducer } from 'react';

import REDUCERS from './actions';
import INITIAL_STATE from './state';

export const Store = createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(REDUCERS, INITIAL_STATE);

  return useMemo(() => {
    const value = { state, dispatch };

    return <Store.Provider value={value}>{children}</Store.Provider>;
  }, [children, state]);
}
