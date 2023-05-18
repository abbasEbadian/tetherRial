import React from 'react';
import { useSelector } from 'react-redux';
import DashboardNavbar from './DashboardNavbar';
import HomeAndAuthNavbar from './HomeAndAuthNavbar';

function Navbar(props) {
    const authenticated = useSelector(state=>state.session.authenticated)
  return <>
    {authenticated? 
        <DashboardNavbar {...props}/>
        :
        <HomeAndAuthNavbar {...props}/>
    }
  </>;
}

export default Navbar;
