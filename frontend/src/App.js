import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
