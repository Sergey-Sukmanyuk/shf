import React from "react";
import {Row, Col, Button, NavLink, Image} from 'react-bootstrap';

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
    // Варіант №1
    // const chess =() => {
    //     let a = "# # # #";
    //     for (let i = 0; i <= 5; i++) {
    //         if (i % 2 !== 0) {
    //             console.log(`${a}`)
    //         } else {
    //             console.log(` ${a}`)
    //         }
    //     }
    // }

    // Варіант №2
    const chess = () => {
        let a = '';
        let b = '';
        for (let i = 0; i <= 9; i++) {
            if (i % 2 !== 0) {
                a += `# `;
            } else {
                b += ` #`;
            }
        }
        for (let j = 0; j <= 5; j++) {
            if (j % 2 !== 0) {
                console.log(a);
            } else {
                console.log(b);
            }
        }
    }

    return (
        <HeaderStyle>
            <Row>
                <Col lg={12} className='header'>
                    <div className="logo">
                        <NavLink className="navbar-brand" href="#">
                            <Image className="logo" src={logo} thumbnail/>
                        </NavLink>
                    </div>
                    <Button onClick={chess} className="header_btn" variant="primary">Шахова дошка</Button>
                </Col>
            </Row>
        </HeaderStyle>
    )
}
export default Header;