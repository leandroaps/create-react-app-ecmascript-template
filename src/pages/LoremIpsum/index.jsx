import { Typography, Box, TextField } from '@mui/material';
import { useContext, useMemo } from 'react';

import { Store } from '../../store';

export default function LOREM() {
  const { state, dispatch } = useContext(Store);

  return useMemo(() => {
    return (
      <>
        <Typography variant="h2" data-testid="title">
          {state.CONTENT.LOREM.TITLE}
        </Typography>
        <Typography paragraph data-testid="paragraph">
          {state.CONTENT.LOREM.PARAGRAPH}
        </Typography>
        <Typography variant="h3" data-testid="subtitle">
          {state.CONTENT.LOREM.SUBTITLE}
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mt: 5 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            defaultValue={state.CONTENT.LOREM.TITLE}
            id="title"
            fullWidth
            label="Type to update the Title"
            variant="outlined"
            onChange={(event) => {
              dispatch({
                value: event.target.value,
                type: 'UPDATE_LOREM_TITLE',
              });
            }}
          />
          <TextField
            defaultValue={state.CONTENT.LOREM.PARAGRAPH}
            id="paragraph"
            fullWidth
            label="Type to update the Paragraph"
            variant="outlined"
            multiline
            maxRows={10}
            onChange={(event) => {
              dispatch({
                value: event.target.value,
                type: 'UPDATE_LOREM_PARAGRAPH',
              });
            }}
          />
        </Box>
      </>
    );
  }, [
    dispatch,
    state.CONTENT.LOREM.PARAGRAPH,
    state.CONTENT.LOREM.SUBTITLE,
    state.CONTENT.LOREM.TITLE,
  ]);
}
