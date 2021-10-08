import PropTypes from 'prop-types';

import styles from './PeoplePage.module.css';

const PeoplePage = ({ people }) => {
    return (
        <ul className={styles.list__container}>
            {people.map(({ id, name, img }) => (
                <li className={styles.list__item} key={id}>
                    <a href='#'>
                        <img
                            className={styles.person__photo}
                            src={img}
                            alt={name}
                        />
                        <p>{name}</p>
                    </a>
                </li>
            ))}
        </ul>
    );
};
PeoplePage.propTypes = {
    people: PropTypes.array,
};

export default PeoplePage;
