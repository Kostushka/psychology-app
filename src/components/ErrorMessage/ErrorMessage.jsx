import UiVideo from '@ui/UiVideo';
import src from './video/video.mp4';
import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
    return (
        <>
            <p className={styles.text}>
                Ошибка данных!
                <br />
                Пожалуйста, зайдите позже.
            </p>
            <UiVideo src={src} playbackRate={1.0} classes={styles.video} />
        </>
    );
};

export default ErrorMessage;
