import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container.js';
import Home from './components/Home/Home.js';
import Favorites from './components/Favorites/Favorites.js';
import About from './components/About/About.js';
import List from './components/List/List.js';
import NotFound from './components/NotFound/NotFound.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/list/:listId' element={<List />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
