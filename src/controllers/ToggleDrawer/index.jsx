import { useState } from 'react';

const toggleDrawer = (anchor, open) => (event) => {
  const [state, setState] = useState({
    right: false,
  });

  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

export default { toggleDrawer };
