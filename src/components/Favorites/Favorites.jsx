import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import icon from './img/folder.svg';

import styles from './Favorites.module.css';

const Favorites = () => {
    const [count, setCount] = useState(0);
    const storeDate = useSelector((state) => state.favoriteReducer);
    useEffect(() => {
        const length = Object.keys(storeDate).length;
        length.toString().length > 2 ? setCount('...') : setCount(length);
    });

    return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt='Избранное' />
            </Link>
        </div>
    );
};

export default Favorites;
