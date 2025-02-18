import React from 'react';
import HomeMain from './homePg/homeM';
import  ContactPg from './contact/Contact'
import MediaM from './mediaPg/MediaM'
import Features from './features/Features';
import ServiceM from './Services/ServiceM';
import Trust from "./moreInfo/InfoMain.js";
import Footer from './Footer/Footer';
function App() {
    return ( 
     <>
        <HomeMain/>
        <MediaM/>
        <Features/>
        <ServiceM/>
        <Trust/>
        <ContactPg/>
         <Footer/>
     </>
     );
}

export default App;