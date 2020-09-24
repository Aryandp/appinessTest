

import lookupTable from 'data/lookup-table.json';

// verify user data from local storage
export const isAuthenticated = () => {
  return localStorage.getItem('userProfile') !== null;
}

// get user details from local storage
export const getUserProfile = () => {
  return JSON.parse(localStorage.getItem('userProfile'));
}

// check whether an object is null or not
export const isObjNull = (obj) => {
  return Object.keys(obj).length === 0;
};

