import ChooseTheme from '@components/HomePage/ChooseTheme';
import styles from './HomePageContainer.module.css';

const HomePageContainer = () => {
    return (
        <>
            <h1 className='header__text'>Выберите тему</h1>
            <ChooseTheme />
        </>
    );
};

export default HomePageContainer;
