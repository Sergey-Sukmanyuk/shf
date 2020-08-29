import React from "react";
import {Row, Col} from "react-bootstrap";
import Navbar from "./Navbar";
import Content from "./Content";

import styled from "styled-components";

const BodyWrapper = styled.div`
.content{
    background-color: gainsboro;
    height: 100vh;
}

.navbar{
    background-color: yellow;
    height: 100vh;
    align-items: flex-start;
}

.media{
    margin-top: 15px;
}

.modal_btn{
    margin-top: 10px;
}
`;


const Body = () =>{
  return(
      <BodyWrapper>
          <Row>
              <Col sm={3} className="navbar">
                  <Navbar/>
              </Col>
              <Col sm={9} className="content">
                  <Content/>
              </Col>
          </Row>
      </BodyWrapper>

  )
}
export default Body;