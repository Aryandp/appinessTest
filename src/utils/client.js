

import axios from 'axios';
import * as constant from './constant';

export const client = axios.create({
  baseURL: constant.BASE_URL,
  headers: {
    "Accept": "*/*",
  }
});
