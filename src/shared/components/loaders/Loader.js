

import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loaderStyle } from '..';

function Loader({ isBackdrop }) {
  const classes = loaderStyle();

  return (
    <>
      {isBackdrop ? (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </>
  );
}
export default Loader;
