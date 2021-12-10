import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useMemo } from 'react';

export default function NAVBAR({ TOGGLE_DRAWER }) {
  return useMemo(() => {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={TOGGLE_DRAWER('right', true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Hello World!
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }, [TOGGLE_DRAWER]);
}
