import React from 'react';
import Dashboards from './Principal-Nav-li/Dashboards';
import Examples from './Principal-Nav-li/Examples';
import Components from './Principal-Nav-li/Components';
import Forms from './Principal-Nav-li/Forms';
import Tables from './Principal-Nav-li/Tables';
import Maps from './Principal-Nav-li/Maps';
import Widgets from './Principal-Nav-li/Widgets';
import Charts from './Principal-Nav-li/Charts';
import Calendar from './Principal-Nav-li/Calendar';

const PrincipalNav = () => {
    return (
       <>

        <Dashboards/>
        <Examples/>
        <Components/>
        <Forms/>
        <Tables/>
        <Maps/>
        <Widgets/>
        <Charts/>
        <Calendar/>
     
       </>
    );
};

export default PrincipalNav;

