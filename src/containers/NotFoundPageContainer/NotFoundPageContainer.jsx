import { useLocation } from 'react-router-dom';
import img from './img/not-found.png';

import styles from './NotFoundPageContainer.module.css';

const NotFoundPageContainer = () => {
    let location = useLocation();

    return (
        <>
            <img className={styles.img} src={img} alt='Not Found' />
            <p className={styles.text}>
                Не найдено совпадений по адресу <u>{location.pathname}</u>
            </p>
        </>
    );
};

export default NotFoundPageContainer;
