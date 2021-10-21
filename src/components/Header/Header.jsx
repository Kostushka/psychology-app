import { NavLink } from 'react-router-dom';
import Favorites from '@components/Favorites';
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
            </ul>
            <Favorites />
        </div>
    );
};

export default Header;
