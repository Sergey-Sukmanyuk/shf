import React from 'react';
import Header from "./components/Header";
import Container from "react-bootstrap/cjs/Container";
import Body from "./components/Body";
import Footer from "./components/Footer";


import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
`;

function App() {
  return (
    <div className="App">
       <Wrapper>
           <Container>
               <Header/>
               <Body/>
               <Footer/>
           </Container>
       </Wrapper>
    </div>
  );
}

export default App;
