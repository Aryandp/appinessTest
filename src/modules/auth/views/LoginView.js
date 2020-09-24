import React, { useState, useEffect, createRef, Suspense } from "react";
import validate from "validate.js";
import { useSelector } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Link,
  Typography,
  Slide,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { loginViewStyles } from "..";
import { Header } from "shared/layouts";
import { schema } from "utils/validate";
import Loader from "shared/components/loaders/Loader";
import loginDetails from "data/login-details.json";

function LoginView() {
  const classes = loginViewStyles();
  const email = createRef();
  const password = createRef();
  const history = useHistory();
  const store = useSelector((state) => state);
  const [isLoginPopupEnable, setIsLoginPopupEnable] = useState(false);
  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  const hasError = (field) => (loginForm.errors[field] ? true : false);

  const [loginForm, setLoginForm] = useState({
    isValid: false,
    userCredentials: { email: "", password: "" },
    touched: {},
    errors: {},
  });

  useEffect(() => {
    const errors = validate(loginForm.userCredentials, schema);
    setLoginForm((loginForm) => ({
      ...loginForm,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [loginForm.userCredentials]);

  const updateLoginModal = (isEnable) => {
    setIsLoginPopupEnable(isEnable);
  };

  const handleChange = () => {
    setLoginForm((loginForm) => ({
      ...loginForm,
      userCredentials: {
        ...loginForm.userCredentials,
        email: email.current.value,
        password: password.current.value,
      },
    }));
    setLoginErrorMsg("");
  };
  // & on success authentication, set the user details into local storage
  const validateLogin = (loginForm) => {
    if (
      loginDetails.username === loginForm.username &&
      loginDetails.password === loginForm.password
    ) {
      localStorage.setItem(
        "userProfile",
        JSON.stringify({ email: loginForm.username })
      );
      localStorage.setItem("theme", "orange");
      history.replace("/dashboard");
    } else {
      setLoginErrorMsg("Email or Password is mismatched");
    }
  };

  // to handle sign in button click 
  const handleSignIn = (e) => {
    e.preventDefault();
    validateLogin({
      username: loginForm.userCredentials.email,
      password: loginForm.userCredentials.password,
    });
  };

  return (
    <Suspense fallback={<Loader isBackdrop={true} />}>
      <Header
        updateLoginModal={updateLoginModal}
        isLoginPopupEnable={isLoginPopupEnable}
        isAuthenticated={false}
      />
      <div className={classes.root}>
        <Slide direction="down" in={isLoginPopupEnable}>
          <Paper className={`${classes.contentBody} login-modal`}>
            <form
              className={classes.form}
              onSubmit={handleSignIn}
              id="btnSignIn"
            >
              <TextField
                className={classes.textField}
                error={hasError("email")}
                fullWidth
                helperText={
                  hasError("email") ? loginForm.errors.email[0] : null
                }
                label="Email address"
                name="email"
                inputRef={email}
                onChange={handleChange}
                variant="outlined"
                margin="dense"
                required
              />
              <TextField
                className={classes.textField}
                error={hasError("password")}
                fullWidth
                helperText={
                  hasError("password") ? loginForm.errors.password[0] : null
                }
                label="Password"
                name="password"
                inputRef={password}
                onChange={handleChange}
                type="password"
                variant="outlined"
                margin="dense"
                required
              />
              <p style={{ color: "red", margin: "0" }}>{loginErrorMsg}</p>
              <div className={classes.wrapper}>
                {navigator.onLine ? (
                  <Button
                    className={classes.signInButton}
                    id="btnSignIn"
                    disabled={!loginForm.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                ) : (
                  <p style={{ color: "red", margin: "0" }}>
                    Please check your internet connection.
                  </p>
                )}
                {store.authReducer.loader && (
                  <CircularProgress
                    size={30}
                    className={classes.buttonProgress}
                  />
                )}
              </div>
              <div style={{ display: "flex" }}>
                <Typography variant="body1" className={classes.forgetPassword}>
                  <Link
                    color="secondary"
                    component={RouterLink}
                    to="/forget-password"
                    variant="body2"
                  >
                    Forgot Password?
                  </Link>
                </Typography>
              </div>
            </form>
          </Paper>
        </Slide>
      </div>
    </Suspense>
  );
}

export default LoginView;
