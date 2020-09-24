

import { default as DashboardView} from 'modules/dashboard/views/DashboardView';
import React, { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { BASE_ROUTE } from 'utils/constant';
import { contentStyles } from './';
import Loader from 'shared/components/loaders/Loader';


function Content() {
  const classes = contentStyles();

  return (
    <Suspense fallback={<Loader isBackdrop />}>
      <main className={`${classes.content} content`}>
        <div className={classes.toolbar} style={{ minHeight: '38px' }} />
        <Route exact path={`${BASE_ROUTE}/`} name="Dashboard" component={DashboardView} />
        <Route exact path={`${BASE_ROUTE}/dashboard`} name="Dashboard" component={DashboardView} />
      </main>
    </Suspense>
  );
}

export default Content;
