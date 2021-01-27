import React from 'react';
import Topnav from "../../header/Topnav";
import HeaderHome from "./elementos/HeaderHome";
import PageContent from './PageContent/PageContent'

const Home = () => {
    return (
        <>
        <Topnav/>
        
        <HeaderHome/>
        
        <PageContent/>
        
        </>
    );
};

export default Home;