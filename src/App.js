import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { BackToTop, Container } from './utils';
function App() {
  return (
    <>
      <Header />
      <Container>
        <BackToTop />
      </Container>
      <Main />
      <Footer />
    </>
  );
}

export default App;
