import { createContext, useMemo, useReducer } from 'react';

import REDUCERS from './actions';
import INITIAL_STATE from './state';

export const Store = createContext();

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(REDUCERS, INITIAL_STATE);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return useMemo(() => {
    return <Store.Provider value={value}>{children}</Store.Provider>;
  }, [children, value]);
}
