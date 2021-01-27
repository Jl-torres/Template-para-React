import React, {useState} from 'react';
import Cardsheader from './cardsheader'

const HeaderHome = () => {

//Listado Card
const [cards, guardarCards] =useState(
    [
    {id:'0', titulo:'Total traffic', cantidad:'350,897', clase:'ni ni-active-40', 
    color:'icon icon-shape bg-gradient-red text-white rounded-circle shadow'},

    {id:'1', titulo:'New Users', cantidad:'2,356', clase:'ni ni-chart-pie-35',
    color:'icon icon-shape bg-gradient-orange text-white rounded-circle shadow' },

    {id:'2', titulo:'Sales', cantidad:'924', clase:'ni ni-money-coins',
    color:'icon icon-shape bg-gradient-green text-white rounded-circle shadow'},

    {id:'3', titulo:'Performance', cantidad:'49,65%', clase:'ni ni-chart-bar-32',
    color:'icon icon-shape bg-gradient-info text-white rounded-circle shadow'}

    ]
)   
    return (
       <>
       <div className="header bg-primary pb-6">
       <div className="container-fluid">
         <div className="header-body">

         <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
              <h6 className="h2 text-white d-inline-block mb-0">Default</h6>
              <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                  <li className="breadcrumb-item"><a href="#">Dashboards</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Default</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 col-5 text-right">
              <a href="#" className="btn btn-sm btn-neutral">New</a>
              <a href="#" className="btn btn-sm btn-neutral">Filters</a>
            </div>
          </div>

          <div className="row">
           
               
               {cards.map(card => (
                   <Cardsheader
                   key={card.id}
                   card={card}/>
               ))}
              
             
          </div>

         </div>
        </div>
       </div>
       </>
    );
};

export default HeaderHome;