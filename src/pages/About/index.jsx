import { Typography } from '@mui/material';
import { useContext, useMemo } from 'react';

import { Store } from '../../store';

export default function ABOUT() {
  const { state } = useContext(Store);

  return useMemo(() => {
    return (
      <>
        <Typography variant="h2" data-testid="title">
          {state.CONTENT.ABOUT.TITLE}
        </Typography>
        <Typography paragraph data-testid="paragraph">
          {state.CONTENT.ABOUT.PARAGRAPH}
        </Typography>
        <Typography variant="h3" data-testid="subtitle">
          {state.CONTENT.ABOUT.SUBTITLE}
        </Typography>
        <Typography paragraph data-testid="paragraph">
          {state.CONTENT.ABOUT.SUBPARAGRAPH}
        </Typography>
      </>
    );
  }, [
    state.CONTENT.ABOUT.PARAGRAPH,
    state.CONTENT.ABOUT.SUBPARAGRAPH,
    state.CONTENT.ABOUT.SUBTITLE,
    state.CONTENT.ABOUT.TITLE,
  ]);
}
