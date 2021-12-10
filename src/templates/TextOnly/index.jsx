import { CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

export default function TEXT_ONLY() {
  return useMemo(() => {
    return (
      <>
        <CssBaseline />
        <Outlet />
      </>
    );
  }, []);
}
