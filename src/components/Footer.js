import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const FooterStyle = styled.div`
.footer{
    background-color: green;
    height: 100%;
}

.copyright {
    font-size: 15px;
    font-style: italic;
    text-align: center;
}
`;
const Footer = () =>{
    return(
        <FooterStyle>
            <Row>
                <Col lg={12} className="footer">

                    <div className="copyright"> &copy; 2020 Sergey Sukmanyu</div>
                </Col>
            </Row>
        </FooterStyle>

    )
}
export default Footer;