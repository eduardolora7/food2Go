import React from 'react';
import '../../assets/css/foodNavBar.css'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconHome from '../../assets/images/icons/iconHome.png';
import IconPizza from '../../assets/images/icons/iconPizza.png';
import IconBurger from '../../assets/images/icons/iconBurger.png';
import IconChicken from '../../assets/images/icons/iconChicken.png';
import IconHotDog from '../../assets/images/icons/iconHotDog.png';
import IconDessert from '../../assets/images/icons/iconDessert.png';

const FoodNavBar = () => (
    <Navbar bg="danger" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav justify fill variant="tabs">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/">
                            <Image src={IconHome} alt="Home" title="Inicio"></Image>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/productos/pizzas">
                            <Image src={IconPizza} alt="Pizza" title="Mostrar Pizzas"></Image>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/productos/burgers">
                            <Image src={IconBurger} alt="Burger" title="Mostrar Hamburgesas " ></Image>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link >
                        <Link to="/productos/chickens" >
                            <Image src={IconChicken} alt="Chickens" title="Mostrar Pollos"></Image>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/productos/hotdogs">
                            <Image src={IconHotDog} alt="HotDog" title="Mostrar Hot-Dogs"></Image>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/productos/desserts">
                            <Image src={IconDessert} alt="Postre" title="Mostrar Postres"></Image>
                        </Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default FoodNavBar;