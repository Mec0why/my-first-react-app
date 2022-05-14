import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.background}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <a href='/'>
              <span className={styles.icon + ' fa fa-tasks'}></span>
            </a>
          </div>
          <ul className={styles.mainnav}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
