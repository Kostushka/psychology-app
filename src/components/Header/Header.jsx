import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li>
                    <NavLink to='/' exact>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/people/?page=1'>Люди</NavLink>
                </li>
                <li>
                    <NavLink to='/not-found' exact>
                        Страница не найдена
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
