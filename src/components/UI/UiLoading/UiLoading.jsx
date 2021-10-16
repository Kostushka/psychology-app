import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import cn from 'classnames';
import loaderBlack from './img/loader-black.svg';
import loaderWhite from './img/loader-white.svg';
import loaderRed from './img/loader-red.svg';
import styles from './UiLoading.module.css';

const UiLoading = ({ theme = 'red', isShadow = false, classes }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);
    useEffect(() => {
        switch (theme) {
            case 'black':
                setLoaderIcon(loaderBlack);
                break;
            case 'white':
                setLoaderIcon(loaderWhite);
                break;
            case 'red':
                setLoaderIcon(loaderRed);
                break;
            default:
                setLoaderIcon(loaderRed);
        }
    }, []);
    return (
        <>
            <img
                src={loaderIcon}
                className={cn(
                    styles.loading,
                    isShadow && styles.shadow,
                    classes
                )}
            />
        </>
    );
};

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string,
};

export default UiLoading;
