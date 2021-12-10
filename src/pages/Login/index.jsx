import SendIcon from '@mui/icons-material/Send';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import fakeAuth from '../../controllers/FakeAuth';

export default function LOGIN() {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }

  return (
    <>
      <Typography variant="h3" data-testid="subtitle">
        You must log in to view the page at the address:{' '}
        <strong>{from.pathname}</strong>
      </Typography>
      <Typography paragraph data-testid="paragraph">
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
      <Button
        type="button"
        endIcon={<SendIcon />}
        variant="contained"
        onClick={login}
      >
        Log in
      </Button>
    </>
  );
}
