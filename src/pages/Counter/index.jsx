import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useContext, useMemo } from 'react';

import { Store } from '../../store';

export default function COUNTER() {
  const { state, dispatch } = useContext(Store);

  return useMemo(() => {
    return (
      <>
        <Typography variant="h2" sx={{ mb: 5 }}>
          Counter Page with Context API
        </Typography>
        <Grid container>
          <Grid item xs={2}>
            <ButtonGroup variant="contained" aria-label=" primary button group">
              <Button type="button" onClick={() => dispatch({ type: 'INSC' })}>
                -1
              </Button>
              <Button type="button" onClick={() => dispatch({ type: 'DESC' })}>
                +1
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h4">{state.METER}</Typography>
          </Grid>
        </Grid>
      </>
    );
  }, [dispatch, state.METER]);
}
