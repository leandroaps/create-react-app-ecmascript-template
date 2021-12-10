import { Typography } from '@mui/material';
import { useContext, useMemo } from 'react';

import { Store } from '../../store';

export default function TASKS() {
  const { state } = useContext(Store);

  return useMemo(() => {
    return (
      <>
        <Typography variant="h2" data-testid="title">
          {state.CONTENT.TEMPLATE.TITLE}
        </Typography>
        <Typography paragraph data-testid="paragraph">
          {state.CONTENT.TEMPLATE.PARAGRAPH}
        </Typography>
      </>
    );
  }, [state.CONTENT.TEMPLATE.PARAGRAPH, state.CONTENT.TEMPLATE.TITLE]);
}
