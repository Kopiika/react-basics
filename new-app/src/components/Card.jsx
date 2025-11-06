import styles from './Card.module.css';

const Card = ({ id, name, title, age, isFavourite, toggleFavourite }) => {
  return (
    <div className={styles.card}>
      {isFavourite && (
        <p className={styles.favourite}>
          <span>💙</span>
        </p>
      )}
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.text}>Title: {title}</p>
      <p className={styles.text}>Age: {age}</p>

      <button className={styles.addFavouriteBtn} onClick={() => toggleFavourite(id)}>
        {isFavourite ? 'Remove Favourite' : 'Add Favourite'}
      </button>
    </div>
  );
};

export default Card;
