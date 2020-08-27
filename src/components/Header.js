import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {NavLink} from "react-bootstrap";

import logo from '../images/logo.png';

import styled from "styled-components";

const HeaderStyle = styled.div`
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;  
    background-color: blueviolet;
    height: 70px;
}
.logo{
    height: 80px;
    border: none;
    background-color: transparent;
}

`;

const Header = () => {
    return (
        <HeaderStyle>
            <Row>
                <Col lg={12} className='header'>
                    <div className="logo">
                        <NavLink className="navbar-brand" href="#">
                            <Image className="logo" src={logo} thumbnail/>
                        </NavLink>
                    </div>
                    <Button ClassName="header_btn" variant="primary">Шахова дошка</Button>
                </Col>
            </Row>
        </HeaderStyle>
    )
}
export default Header;