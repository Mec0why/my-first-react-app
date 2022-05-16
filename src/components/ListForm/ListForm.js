import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/store';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label className={styles.label}>Title:</label>
      <TextInput
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className={styles.label}>Description:</label>
      <TextInput
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
