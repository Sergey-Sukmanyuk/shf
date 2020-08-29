import React from "react";
import {ListGroup} from "react-bootstrap";

import styled from "styled-components";

const NavWrapper = styled.div`
.navList {
    width: 255px;
 
}
`;

const Navbar = () => {
    return (
        <NavWrapper>
            <ListGroup className="navList">
                <ListGroup.Item> React</ListGroup.Item>
                <ListGroup.Item>React-bootstrap, bootstrap</ListGroup.Item>
                <ListGroup.Item>Styled component</ListGroup.Item>
                <ListGroup.Item>Axios</ListGroup.Item>
                <ListGroup.Item>Hooks </ListGroup.Item>
                <ListGroup.Item>React hook form </ListGroup.Item>
            </ListGroup>
        </NavWrapper>
    )
}
export default Navbar;