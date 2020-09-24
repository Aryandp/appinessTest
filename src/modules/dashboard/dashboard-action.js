

import { client } from 'utils/client';
import employeeData from 'data/employee.json'

export function getEmployeeList() {
  return {
    type: 'GET_EMPLOYEE_LIST',
    payload: employeeData.user
  };
}
