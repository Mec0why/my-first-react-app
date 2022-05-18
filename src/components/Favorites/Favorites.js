import styles from './Favorites.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import { Navigate } from 'react-router-dom';

const Favorites = () => {
  const favoriteCards = useSelector((state) => getFavoriteCards(state));

  console.log(favoriteCards);

  if (favoriteCards.length === 0) return <Navigate to='/' />;
  return (
    <div>
      <div className={styles.hero}>
        <PageTitle>Favorites</PageTitle>
        <p className={styles.subtitle}>Awesomeness at its Best!</p>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Favorites;
