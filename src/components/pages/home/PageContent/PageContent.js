import React from 'react';
import Columna2a from './Columna2a';
import Columna2b from './Columna2b';
import Columna2c from './Columna2c';
import SalesValue from './SalesValue';
import TotalOrders from './TotalOrders'

const PageContent = () => {
    return (
        <>
      <div className="container-fluid mt--6">
      <div className="row">
     
       <SalesValue/>
        
       <TotalOrders/>
     </div>

     <div class="row">
        <div class="col-xl-4">
         <Columna2a/>
         </div> 
         <div class="col-xl-4">
         <Columna2b/>
         </div>  
         <div class="col-xl-4">
         <Columna2c/>
         </div>   
      </div> 

    </div>    
        </>
    );
};

export default PageContent;