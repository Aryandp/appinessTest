

const dashboardReducer = (
    state = {
      loader: false,
      employeeList: [],
    },
    action
  ) => {
    switch (action.type) {
      
      case 'GET_EMPLOYEE_LIST':
        return {
          ...state,
          loader: false,
          employeeList: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default dashboardReducer;
  