import PropTypes from 'prop-types';
import styles from './PersonDirection.module.css';

const PersonDirection = ({ personDirection }) => {
    return (
        // <div className={styles.wrapper}>
        //     <ul className={styles.list__container}>
        //         {personDirection.map(({ id, school }) => (
        //             <li className={styles.list__item} key={id}>
        //                 <span className={styles.title}>{school}</span>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {personDirection.map((data, index) => (
                    <li className={styles.list__item} key={index}>
                        <span className={styles.title}>{data}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

PersonDirection.propTypes = {
    personDirection: PropTypes.array,
};

export default PersonDirection;
