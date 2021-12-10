import { Backdrop, CircularProgress } from '@mui/material';
import { useMemo } from 'react';

export default function LOADING() {
  return useMemo(() => {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }, []);
}
