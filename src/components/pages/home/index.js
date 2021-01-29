import React from 'react';
import Topnav from "../../header/Topnav";
import HeaderHome from "./elementos/HeaderHome";
import PageContent from './PageContent/PageContent';
import Footer from '../../Footer/Footer'

const Home = () => {
    return (
        <div id="paginaPrincipal" className="Paginasmall">
        <Topnav/>
        
        <HeaderHome/>
        
        <PageContent/>

        <Footer/>
        
        </div>
    );
};

export default Home;