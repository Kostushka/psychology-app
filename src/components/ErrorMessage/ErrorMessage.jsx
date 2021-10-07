import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                Ошибка данных!
                <br />
                Пожалуйста, зайдите позже.
            </p>
        </>
    );
};

export default ErrorMessage;
