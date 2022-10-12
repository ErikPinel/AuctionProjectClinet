import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from 'axios';
import { useEffect, useState } from 'react';

function OffcanvasExample() {
const [userName,setUserName]=useState();
  useEffect(()=>{
    const user=localStorage.getItem("logged")?localStorage.getItem("logged"):null;
    console.log(localStorage.getItem("logged"))
    if(user)
    {
    axios.post(`/api-users/users/logged`,{user:user}).then((res) => {
    
      setUserName(res.data.user.fullName)
  
  })
}



},[]);




  return (
    <>

        <Navbar key={"ml"} bg="light" expand={"ml"} className="mb-3">
          <Container fluid>
            <Navbar.Brand><NavLink className="nav-btn" to="/home"><strong>auction.co.il</strong></NavLink></Navbar.Brand>
            <span className="nav-btn" to="/home"><strong>  {userName?"logged as - "+userName:""}</strong></span>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-ml`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-ml`}
              aria-labelledby={`offcanvasNavbarLabel-expand-ml`}
              placement="end"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-ml`}>
                auction.co.il
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                 <NavLink className="nav-btn" to="/displayMen"><strong>Mens Section</strong></NavLink>
                 <NavLink className="nav-btn" to="/displayWomen"><strong>Women Section</strong></NavLink>
                 <NavLink className="nav-btn" to="/displayKids"><strong>Kids Section</strong></NavLink>
                { userName?<NavLink className="nav-btn" to="/addItem"><strong>Add item</strong></NavLink>:""}
                  <NavDropdown
                    title="login/register"
                    id={`offcanvasNavbarDropdown-expand-ml`}
                  >
                   {!userName?
                     <>
                   <NavLink className="nav-btn" to="/logIn"><strong>log in</strong></NavLink>
                 
                    <NavDropdown.Item href="#action4">
                    <NavLink className="nav-btn" to="/register"><strong>register</strong></NavLink>
                   
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    </>
                    : <NavDropdown.Item href="#action4">
                    <NavLink className="nav-btn" onClick={()=>{ localStorage.removeItem('logged');window.location.reload(false)}}><strong>log out</strong></NavLink>
                   
                    </NavDropdown.Item>
                    }
                   
                  </NavDropdown>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
  );
}

export default OffcanvasExample;