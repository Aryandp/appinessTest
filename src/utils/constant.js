

import React from 'react';
import {  ExitToApp,Dashboard } from '@material-ui/icons';

// base url for rest api
export const BASE_URL = '';

// server url
export const SERVER_URL = '';

// base route
export const BASE_ROUTE = process.env.PUBLIC_URL;

// sidebar route
export const SIDEBAR = [
  { name: 'Dashboard', route: '/dashboard', icon: <Dashboard /> },
  { name: 'Logout', route: '/logout', icon: <ExitToApp /> },
];

// s3 bucket
export const S3_BUCKET_CONFIG = {
  region: 'ap-south-1',
  accessKeyId: '',
  secretAccessKey: '',
}

// socket
export const SOCKET_URL = '';

// doctor consent data
export const CONSENTS = [];
