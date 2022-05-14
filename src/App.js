import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container.js';
import Home from './components/Home/Home.js';
import Favorites from './components/Favorites/Favorites.js';
import About from './components/About/About.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <Favorites />
        <About />
      </Container>
    </main>
  );
};

export default App;
