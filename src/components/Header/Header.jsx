import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    useTheme,
    THEME_BEHAVIORISM,
    THEME_HUMANISTIC,
    THEME_PSYCHOANALYSIS,
} from '@context/ThemeProvider';
import Favorites from '@components/Favorites';
import behavTheme from './img/behavior.svg';
import humanTheme from './img/humanistic.svg';
import psychoTheme from './img/psychoanalys.svg';

import styles from './Header.module.css';

const Header = () => {
    const [icon, setIcon] = useState(humanTheme);

    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_BEHAVIORISM:
                setIcon(behavTheme);
                break;
            case THEME_PSYCHOANALYSIS:
                setIcon(psychoTheme);
                break;
            case THEME_HUMANISTIC:
                setIcon(humanTheme);
                break;

            default:
                setIcon(humanTheme);
        }
    }, [isTheme]);

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='Психология' />

            <ul className={styles.list__container}>
                <li>
                    <NavLink to='/' exact>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/people/?page=1'>Психологи</NavLink>
                </li>
                <li>
                    <NavLink to='/search' exact>
                        Поиск
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fail' exact>
                        Ошибка
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/not-found' exact>
                        Нет страницы
                    </NavLink>
                </li>
            </ul>

            <Favorites />
        </div>
    );
};

export default Header;
