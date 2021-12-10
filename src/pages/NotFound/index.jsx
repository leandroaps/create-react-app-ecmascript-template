import { Typography, Button, Grid } from '@mui/material';
import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Store } from '../../store';

export default function NOT_FOUND() {
  const { state } = useContext(Store);

  return useMemo(() => {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" data-testid="title">
          {state.CONTENT.NOT_FOUND.TITLE}
        </Typography>
        <Typography variant="h2" data-testid="title">
          {state.CONTENT.NOT_FOUND.PARAGRAPH}
        </Typography>
        <Button component={Link} to="/">
          {state.CONTENT.NOT_FOUND.LINK}
        </Button>
      </Grid>
    );
  }, [
    state.CONTENT.NOT_FOUND.LINK,
    state.CONTENT.NOT_FOUND.PARAGRAPH,
    state.CONTENT.NOT_FOUND.TITLE,
  ]);
}
