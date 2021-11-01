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

                            <Nav.Link href="/products">Productos</Nav.Link>

                            {isAuthenticated ? (
                                <NavDropdown title={name} id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>

                                    <NavDropdown.Item href="/ventas">Ventas</NavDropdown.Item>

                                    <NavDropdown.Divider />

                                    <NavDropdown.Item href="/roles">Roles</NavDropdown.Item>
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
                            className="btn btn-primary m-2"
                        >
                            {textButton}
                        </button>
                    ) : (
                        <button onClick={() => loginWithRedirect()} className="btn btn-primary m-2">
                            {textButton}
                        </button>
                    )}
                </Navbar>
            )}
        </>
    );
};

export default NavbarGeneral;
