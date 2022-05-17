import styles from './Card.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFavorite((prevState) => !prevState);
    dispatch(toggleCardFavorite(props.id));
    console.log(!isFavorite);
  };

  return (
    <li className={styles.card}>
      {props.title}
      <button
        type='button'
        onClick={handleSubmit}
        className={clsx(
          styles.icon,
          { ' fa fa-star-o': !isFavorite },
          { ' fa fa-star': isFavorite }
        )}
      ></button>
    </li>
  );
};

export default Card;
