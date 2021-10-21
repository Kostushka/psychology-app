import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeoplePage from '@components/PeoplePage/PeoplePage';
import styles from './FavoritePageContainer.module.css';

const FavoritePageContainer = () => {
    const [people, setPeople] = useState([]);
    console.log(people);
    const storeDate = useSelector((state) => state.favoriteReducer);
    useEffect(() => {
        const arr = Object.entries(storeDate);
        if (arr.length) {
            const res = arr.map((item) => {
                return {
                    id: item[0],
                    ...item[1],
                };
            });
            setPeople(res);
        }
    }, []);
    return (
        <>
            <h1 className='header__text'>Favorite Page</h1>
            {people.length ? (
                <PeoplePage people={people} />
            ) : (
                <h2 className={styles.comment}>Нет данных</h2>
            )}
        </>
    );
};

export default FavoritePageContainer;
