

import { makeStyles } from '@material-ui/core/styles';
import { lazy } from 'react';

const CustomCheckbox = lazy(() => import('./checkbox/CustomCheckbox'));
const GlobalError = lazy(() => import('./errors/GlobalError'));
const Loader = lazy(() => import('./loaders/Loader'));

export { CustomCheckbox, GlobalError, Loader };

export const loaderStyle = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export const searchInputStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: '2px 8px',
    display: 'flex',
    border: '1px solid #f1f1f1'
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
    fontSize: '20px'
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px',
  },
}));
