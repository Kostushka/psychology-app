import PropTypes from 'prop-types';
import cn from 'classnames';
import {
    useTheme,
    THEME_BEHAVIORISM,
    THEME_HUMANISTIC,
    THEME_PSYCHOANALYSIS,
} from '@context/ThemeProvider';
import imgBehav from './img/behav.jpg';
import imgPsy from './img/psycho.jpg';
import imgHum from './img/human.jpg';

import styles from './ChooseTheme.module.css';

const ChooseThemeItem = ({ theme, text, img, classes }) => {
    const isTheme = useTheme();

    return (
        <div
            className={cn(styles.item, classes)}
            onClick={() => isTheme.change(theme)}
        >
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    );
};
ChooseThemeItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
    classes: PropTypes.string,
};

const ChooseTheme = () => {
    const element = [
        {
            theme: THEME_BEHAVIORISM,
            text: 'Бихевиоризм',
            img: imgBehav,
            classes: styles.item__behav,
        },
        {
            theme: THEME_PSYCHOANALYSIS,
            text: 'Психоанализ',
            img: imgPsy,
            classes: styles.item__psy,
        },
        {
            theme: THEME_HUMANISTIC,
            text: 'Гуманизм',
            img: imgHum,
            classes: styles.item__hum,
        },
    ];
    return (
        <div className={styles.container}>
            {element.map(({ theme, text, img, classes }, index) => (
                <ChooseThemeItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    );
};

export default ChooseTheme;
