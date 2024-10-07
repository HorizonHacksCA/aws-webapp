import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Home from './Home.jsx'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<Navbar expand="lg" className="bg-body-tertiary sticky-nav" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="/"><img src="/logo.svg" className="icon"/>HorizonHacks</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/login">Dashboard</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />}/>
				<Route path="/login" element={<Login />}/>
			</Routes>
		</Router>
	</>
);

