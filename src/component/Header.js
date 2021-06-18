import React from 'react';
import { Nav , Navbar  } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header=()=>{
    return(
        <Navbar className='bg-dark' style={{width:'100%' , display:'flex' , opacity:'0.8'}}>
            <Navbar.Brand>
                <img src={logo}  style={{width:'50px' , height:'50px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className='ml-auto' >
                     <LinkContainer exact to="/"><Nav.Link className="text-light">Home</Nav.Link></LinkContainer>                    
                     <LinkContainer to="/family"><Nav.Link className="text-light">Family</Nav.Link></LinkContainer>
                      <LinkContainer to="/Hyderabad"><Nav.Link className="text-light">Hyderabad</Nav.Link></LinkContainer>
                     <LinkContainer to="/Pune"><Nav.Link className="text-light">Pune</Nav.Link></LinkContainer>
                     
                     
                     
                     
                 </Nav>
             </Navbar.Collapse>

            

        </Navbar>
    )
}
export default Header;

