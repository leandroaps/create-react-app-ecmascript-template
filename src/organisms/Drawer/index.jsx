import { Box, Divider, List, ListItem, ListItemText } from '@mui/material';
import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Store } from '../../store';

export default function DRAWER({ TOGGLE_DRAWER }) {
  const { state } = useContext(Store);

  return useMemo(() => {
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={TOGGLE_DRAWER('right', false)}
        onKeyDown={TOGGLE_DRAWER('right', false)}
      >
        <List>
          {state.DRAWER.URL.map((text) => (
            <ListItem
              button
              key={text}
              component={Link}
              to={text.toLowerCase()}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
  }, [state.DRAWER, TOGGLE_DRAWER]);
}
