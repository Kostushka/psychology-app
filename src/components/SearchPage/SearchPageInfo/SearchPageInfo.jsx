import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SearchPageInfo.module.css';

const SearchPageInfo = ({ peopleSearch }) => {
    return (
        <>
            {peopleSearch.length ? (
                <ul className={styles.list__container}>
                    {peopleSearch.map(({ id, name, img }) => (
                        <li className={styles.list__item} key={id}>
                            <Link to={`/people/${id}`}>
                                <img
                                    className={styles.person__photo}
                                    src={img}
                                    alt={name}
                                />
                                <p className={styles.person__name}>{name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2 className={styles.person__comment}>Нет данных</h2>
            )}
        </>
    );
};

SearchPageInfo.propTypes = {
    peopleSearch: PropTypes.array,
};

export default SearchPageInfo;
