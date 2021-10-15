import PropTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import styles from './UiButton.module.css';

const UiButton = ({ onClick, disabled, number, theme = 'light', classes }) => {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={cn(styles.button, styles[theme], classes)}
            >
                {number}
            </button>
        </>
    );
};

UiButton.propTypes = {
    onClick: PropTypes.func,
    number: PropTypes.number,
    theme: PropTypes.string,
    classes: PropTypes.string,
    disabled: PropTypes.bool,
};

export default UiButton;
