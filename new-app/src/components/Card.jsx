import styles from './Card.module.css';
import {useNavigate} from "react-router-dom"
import PropTypes from 'prop-types';

const Card = ({ 
  id, 
  name = "Example Name", 
  title = "No Title", 
  age = 0, 
  isFavourite = false, 
  toggleFavourite, 
  handleDelete }) => {
    console.log("ID in Card:", id, "Name:", name);
    console.log("Type of ID:", typeof id);
    console.log("Type of age:", typeof age);
    const navigate = useNavigate();
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
      <button className={styles.deleteBtn} onClick={() => handleDelete(id)}>
        Delete this person
      </button>
      <button onClick={()=> navigate(`/employees/${id}`)}>
        View Employee
      </button>

    </div>
  );
};

Card.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Card;
