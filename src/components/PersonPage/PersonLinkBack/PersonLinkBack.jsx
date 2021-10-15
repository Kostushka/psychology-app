import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import goBackIcon from './img/back.svg';
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const history = useHistory();

    const handleGoBack = (e) => {
        e.preventDefault();
        history.goBack();
    };

    return (
        <>
            <a className={styles.link} href='#' onClick={handleGoBack}>
                <img
                    src={goBackIcon}
                    alt='Go back'
                    className={styles.link__img}
                />
                <span>Назад</span>
            </a>
        </>
    );
};

export default PersonLinkBack;
