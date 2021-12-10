import { AppBar, Grid, Toolbar } from '@mui/material';
import { useMemo } from 'react';

import COPYRIGHT from '../../molecules/Copyright';

export default function FOOTER() {
  return useMemo(() => {
    return (
      <AppBar
        position="static"
        color="primary"
        sx={{
          top: 'auto',
          bottom: 0,
          mx: 'auto',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Toolbar>
            <COPYRIGHT company="Company" url="https://www.company.com" />
          </Toolbar>
        </Grid>
      </AppBar>
    );
  }, []);
}
