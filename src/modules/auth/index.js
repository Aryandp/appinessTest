import { makeStyles } from '@material-ui/styles';
import banner from 'assets/images/appiness-banner.jpg';

// login view styling
export const loginViewStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#fff',
    height: '100vh',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  grid: {
    height: '100%',
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    marginLeft: 32,
  },
  contentBody: {
    width: '280px',
    position: 'absolute',
    right: '1%',
    top: '4%',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexBasis: 700,
  },
  textField: {
    marginTop: 16,
  },
  signInButton: {
    margin: '8px 0',
    width: '60%',
    padding: '5px 22px',
  },
  wrapper: {
    margin: '10',
    position: 'relative',
  },
  buttonProgress: {
    color: '#f77200',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  forgetPassword: {
    width: '100%',
    textAlign: 'center',
  },
}));
