import { Typography } from '@mui/material';
import { useContext, useMemo } from 'react';

import { Store } from '../../store';

export default function HOME() {
  const { state } = useContext(Store);

  return useMemo(() => {
    return (
      <>
        <Typography variant="h2" sx={{ mb: 5 }}>
          {state.CONTENT.HOME.TITLE}
        </Typography>
        <Typography paragraph>{state.CONTENT.HOME.PARAGRAPH}</Typography>
      </>
    );
  }, [state.CONTENT.HOME.PARAGRAPH, state.CONTENT.HOME.TITLE]);
}
