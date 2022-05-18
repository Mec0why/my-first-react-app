import styles from './Card.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFavorite((prevState) => !prevState);
    dispatch(toggleCardFavorite(props.id));
  };

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
    console.log('I happened');
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          type='button'
          onClick={handleSubmit}
          className={clsx(
            styles.icon,
            { ' fa fa-star-o': !isFavorite },
            { ' fa fa-star': isFavorite }
          )}
        ></button>
        <button
          type='button'
          onClick={handleRemove}
          className={clsx(styles.icon, ' fa fa-trash')}
        ></button>
      </div>
    </li>
  );
};

export default Card;
