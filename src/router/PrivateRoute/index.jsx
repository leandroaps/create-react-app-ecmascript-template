import { useMemo } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

import FAKE_AUTH from '../../controllers/FakeAuth';
import FULL_PAGE from '../../templates/FullPage';

export default function PRIVATE_ROUTE({ element: Component }) {
  const location = useLocation();

  return useMemo(() => {
    return (
      <Route>
        {FAKE_AUTH.isAuthenticated === true ? (
          <FULL_PAGE>
            <Component />
          </FULL_PAGE>
        ) : (
          <Navigate to={{ pathname: '/login', state: { from: location } }} />
        )}
      </Route>
    );
  }, [location]);
}
