import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ paginator, pageNumbers }) => {
    return (
        <ul className={styles.list__container}>
            {pageNumbers.map((number) => (
                <li className={styles.list__item} key={number}>
                    <Link to={`/people/?page=${number}`}>
                        <UiButton
                            onClick={() => paginator(number)}
                            number={number}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
PeopleNavigation.propTypes = {
    pageNumbers: PropTypes.array,
    paginator: PropTypes.func,
};

export default PeopleNavigation;
