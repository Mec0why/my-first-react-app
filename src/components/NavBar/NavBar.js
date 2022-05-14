import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav className={styles.background}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <a href='#/'>
              <span className={styles.icon + ' fa fa-tasks'}></span>
            </a>
          </div>
          <ul className={styles.mainnav}>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#order'>Favorite</a>
            </li>
            <li>
              <a href='#booking'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
