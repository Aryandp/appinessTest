

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function LogoutView() {

  const history = useHistory();
  useEffect(() => {
    localStorage.removeItem('userProfile');
    localStorage.removeItem('theme');
    history.replace('/login');
  });
  
  return <div>Logout</div>;
}

export default LogoutView;
