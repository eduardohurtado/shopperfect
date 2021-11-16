import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarGeneral = () => {
    const { loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently, isLoading } =
        useAuth0();
    const [textButton, setTextButton] = useState("Login");
    const [name, setName] = useState("");

    const removeToken = () => {
        localStorage.removeItem("token");
    };

    useEffect(() => {
        if (isAuthenticated) {
            setTextButton("Logout");
            setName(user.name);
        } else {
            setTextButton("Login");
            setName("");
        }
    }, [isAuthenticated, user]);

    useEffect(() => {
        const getToken = async () => {
            const accessToken = await getAccessTokenSilently();
            localStorage.setItem("token", accessToken);
        };
        if (isAuthenticated) {
            getToken();
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return (
        <>
            {isLoading ? (
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Shopperfect</Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link>Cargando...</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            ) : (
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Shopperfect</Navbar.Brand>

                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>

                            <Nav.Link href="/tienda">Tienda</Nav.Link>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/products"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Productos
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {isAuthenticated ? (
                                        <>
                                            <a className="dropdown-item" href="/productos/stock">
                                                Stock
                                            </a>
                                            <div className="dropdown-divider"></div>
                                        </>
                                    ) : null}

                                    <a className="dropdown-item" href="/productos/nuevo">
                                        Añadir nuevo
                                    </a>
                                </div>
                            </li>

                            {isAuthenticated ? (
                                <NavDropdown title={name} id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item href="/ventas">Ventas</NavDropdown.Item>
                                </NavDropdown>
                            ) : null}
                        </Nav>
                    </Container>

                    {isAuthenticated ? (
                        <button
                            onClick={() => {
                                logout({ returnTo: window.location.origin });
                                removeToken();
                            }}
                            className="btn btn-danger m-2"
                        >
                            {textButton}
                        </button>
                    ) : (
                        <button onClick={() => loginWithRedirect()} className="btn btn-success m-2">
                            {textButton}
                        </button>
                    )}
                </Navbar>
            )}
        </>
    );
};

export default NavbarGeneral;
