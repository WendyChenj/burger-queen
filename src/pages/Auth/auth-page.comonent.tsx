import React from 'react';
import Auth from '../../common/components/Auth/auth.component';

import { Dialog, DialogContent } from '@material-ui/core';

const AuthPage = (): JSX.Element => {
  return (
    <Dialog open={true}>
      <DialogContent>
        <Auth />
      </DialogContent>
    </Dialog>
  );
};

export default AuthPage;
