import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({ paginator, pageNumbers, id }) => {
    return (
        <ul className={styles.list__container}>
            {pageNumbers.map((number) => (
                <li className={styles.list__item} key={number}>
                    <Link to={`/people/?page=${number}`}>
                        <UiButton
                            disabled={Number(id) === number}
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
    id: PropTypes.string,
};

export default PeopleNavigation;
