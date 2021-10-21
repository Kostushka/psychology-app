import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import PersonDirection from '@components/PersonPage/PersonDirection';
import UiLoading from '@ui/UiLoading';

import styles from './PersonPageContainer.module.css';
import { useSelector } from 'react-redux';

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
            const res = await getApiResource(`${API_PERSON}/${id}`);
            // const res = await getApiResource();
            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);
            setPersonId(id);
            if (res) {
                // res.map(({ id, name, img, desc, info }) => {
                //     const idPerson = Number(match.params.id);
                //     if (id === idPerson) {
                //         setPersonInfo([
                //             {
                //                 title: 'Описание',
                //                 data: desc,
                //             },
                //         ]);
                //         setPersonName(name);
                //         setPersonPhoto(img);
                //         info.length && setPersonDirection(info);
                //     }
                // });

                res.map(
                    ({
                        name,
                        img,
                        nickname,
                        category,
                        birthday,
                        occupation,
                    }) => {
                        setPersonInfo([
                            { title: 'Nickname', data: nickname },
                            { title: 'Category', data: category },
                            { title: 'Birthday', data: birthday },
                        ]);
                        setPersonName(name);
                        setPersonPhoto(img);
                        occupation.length && setPersonDirection(occupation);
                    }
                );

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
