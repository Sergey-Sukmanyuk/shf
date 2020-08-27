import React from "react";
import Nav from "react-bootstrap/Nav";


const Navbar = () => {
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav>

    )
}
export default Navbar;