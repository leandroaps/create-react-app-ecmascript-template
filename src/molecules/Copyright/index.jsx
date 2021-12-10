import { Link, Typography } from '@mui/material';
import { useContext, useMemo } from 'react';

import { Store } from '../../store';

export default function COPYRIGHT({ company, url }) {
  const { state } = useContext(Store);

  return useMemo(() => {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {state.CONTENT.COPYRIGHT.TITLE}
        <Link color="inherit" href={url}>
          {company}
        </Link>{' '}
        {state.CONTENT.COPYRIGHT.TIMESTAMP}
        {'.'}
      </Typography>
    );
  }, [
    company,
    state.CONTENT.COPYRIGHT.TIMESTAMP,
    state.CONTENT.COPYRIGHT.TITLE,
    url,
  ]);
}
