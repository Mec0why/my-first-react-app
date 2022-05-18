import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { filterCard } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterCard(searchPhrase));
    setSearchPhrase('');
  };

  useEffect(() => {
    dispatch(filterCard(''));
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        placeholder='Search…'
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
