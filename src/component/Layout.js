import React from 'react';
import Header from './Header';
import Footer from './Footer';
import log from '../log.jpg';
import { Scrollbars } from 'react-custom-scrollbars-2';
const Layout=({children})=>{
    return(
        <div >
            <header>
                <Header/>
            </header>
            
            
            <main>
                 {children}
            </main>
        
            
                
                
            
            <footer marginBottom='2px'>
                <Footer/>
            </footer>
        </div>
    )
}
export default Layout;
