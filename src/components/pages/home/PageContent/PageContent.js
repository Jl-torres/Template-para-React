import React from 'react';
//Columna1
import SalesValue from './Columna1/SalesValue';
import TotalOrders from './Columna1/TotalOrders';
//Columna2
import Columna2a from './Columna2/Columna2a';
import Columna2b from './Columna2/Columna2b';
import Columna2c from './Columna2/Columna2c';
//Columna3
import Columna3a from './Columna3/Columna3a';
import Columna3b from './Columna3/Columna3b';
//Columna4
import Columna4a from './Columna4/Columna4a';
import Columna4b from './Columna4/Columna4b';
import './pageContent.css'

const PageContent = () => {
    return (
        <>
      <div className="container-fluid mt--6 espaciadoPagina">
      <div className="row">  
       <SalesValue/>
        
       <TotalOrders/>
     </div>

     <div className="row">
        <div className="col-xl-4">
         <Columna2a/>
         </div> 
         <div className="col-xl-4">
         <Columna2b/>
         </div>  
         <div className="col-xl-4">
         <Columna2c/>
         </div>   
      </div> 

      <div className="row">
        <div className="col-xl-5">
         <Columna3a/>
         </div> 
         <div className="col-xl-7">
         <Columna3b/>
         </div>    
      </div> 
    
      <div className="row">
        <div className="col-xl-8">
        <Columna4a/>
        </div>
        <div className="col-xl-4">
        <Columna4b/>
        </div>  
      </div>

    </div>    
        </>
    );
};

export default PageContent;