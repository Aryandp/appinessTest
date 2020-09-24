

import { CssBaseline } from '@material-ui/core';
import 'assets/css/theme.scss';
import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import Loader from 'shared/components/loaders/Loader';
import { Content, Footer, Header, Sidebar } from 'shared/layouts';
import { isAuthenticated } from 'utils/common';

function App() {
  const history = useHistory();

  return (
    <Suspense fallback={<Loader isBackdrop />}>
      {isAuthenticated() ? <div id={localStorage.getItem('theme')}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </div> : history.replace('/login')}
    </Suspense>
  );
}

export default App;
