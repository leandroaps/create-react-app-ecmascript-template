import { useState, useMemo } from 'react';
import { SwipeableDrawer, CssBaseline, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import DRAWER from '../../organisms/Drawer';
import FOOTER from '../../organisms/Footer';
import NAVBAR from '../../organisms/NavBar';

export default function FULL_PAGE() {
  const [state, setState] = useState({
    right: false,
  });

  return useMemo(() => {
    const TOGGLE_DRAWER = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
    return (
      <>
        <CssBaseline />
        <Container maxWidth="full" sx={{ mt: 13, width: 1 }}>
          <NAVBAR TOGGLE_DRAWER={TOGGLE_DRAWER} />
          <SwipeableDrawer
            anchor="right"
            open={state.right}
            onClose={TOGGLE_DRAWER('right', false)}
            onOpen={TOGGLE_DRAWER('right', true)}
          >
            <DRAWER TOGGLE_DRAWER={TOGGLE_DRAWER} />
          </SwipeableDrawer>
          <Outlet />
          <FOOTER />
        </Container>
      </>
    );
  }, [state]);
}
