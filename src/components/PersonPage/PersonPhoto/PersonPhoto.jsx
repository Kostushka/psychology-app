import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonToFavorite } from '@store/actions';
import favoriteFill from './img/favorite-fill.svg';
import favorite from './img/favorite.svg';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
    personName,
    personPhoto,
    personId,
    personFavorite,
    setPersonFavorite,
}) => {
    const dispatch = useDispatch();

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonToFavorite(personId));
            setPersonFavorite(false);
        } else {
            dispatch(
                setPersonToFavorite({
                    [personId]: {
                        name: personName,
                        img: personPhoto,
                    },
                })
            );
            setPersonFavorite(true);
        }
    };
    return (
        <>
            <div className={styles.container}>
                <img
                    className={styles.photo}
                    src={personPhoto}
                    alt={personName}
                />
                <img
                    className={styles.favorite}
                    onClick={dispatchFavoritePeople}
                    src={personFavorite ? favoriteFill : favorite}
                    alt='Добавить в избранное'
                />
            </div>
        </>
    );
};

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
