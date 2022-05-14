import NavBar from './components/NavBar/NavBar';
import Container from './components/Container/Container.js';
import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <div>
          <Hero />
          <SearchForm />
          <List />
        </div>
      </Container>
    </main>
  );
};

export default App;
