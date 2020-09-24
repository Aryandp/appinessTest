import React, { useEffect } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import { getEmployeeList } from '../dashboard-action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



export default function DashboardView() {
  const dispatch=useDispatch()
  const store=useSelector(state=>state.dashboardReducer)
   useEffect(()=>{
  dispatch(getEmployeeList()) 
   },[])
  return (
    <div >
      {store.employeeList.map(item=>{return (
        <EmployeeCard emp={item}/>
      )})}
      
    </div>
  );
}
