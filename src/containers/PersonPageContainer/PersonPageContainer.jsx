import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import UiLoading from '@ui/UiLoading';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import PersonDirection from '@components/PersonPage/PersonDirection';
import { getApiResource } from '@utils/network';

import styles from './PersonPageContainer.module.css';

const PersonInfo = React.lazy(() =>
    import('@components/PersonPage/PersonInfo')
);

const PersonPageContainer = ({ match, setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personDirection, setPersonDirection] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeDate = useSelector((state) => state.favoriteReducer);

    useEffect(() => {
        (async () => {
            const id = match.params.id;
            const res = await getApiResource();

            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);
            setPersonId(id);

            if (res) {
                res.map(({ id, name, img, desc, info }) => {
                    const idPerson = Number(match.params.id);
                    if (id === idPerson) {
                        setPersonInfo([
                            {
                                title: 'Описание',
                                data: desc,
                            },
                        ]);
                        setPersonName(name);
                        setPersonPhoto(img);
                        info.length && setPersonDirection(info);
                    }
                });

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, []);

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={personId}
                        personFavorite={personFavorite}
                        setPersonFavorite={setPersonFavorite}
                    />

                    {personInfo && (
                        <React.Suspense fallback={<UiLoading />}>
                            <PersonInfo personInfo={personInfo} />
                        </React.Suspense>
                    )}
                    {personDirection && (
                        <PersonDirection personDirection={personDirection} />
                    )}
                </div>
            </div>
        </>
    );
};

PersonPageContainer.propTypes = {
    match: PropTypes.object,
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPageContainer);
