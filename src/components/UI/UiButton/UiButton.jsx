import PropTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import styles from './UiButton.module.css';

const UiButton = ({ onClick, number, theme = 'light', classes }) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, styles[theme], classes)}
        >
            {number}
        </button>
    );
};

UiButton.propTypes = {
    onClick: PropTypes.func,
    number: PropTypes.number,
    theme: PropTypes.string,
    classes: PropTypes.string,
};

export default UiButton;
