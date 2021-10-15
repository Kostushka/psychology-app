import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getApiResource } from '@utils/network';
import { API_PERSON } from '@constants/api';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';

import styles from './PersonPageContainer.module.css';

const PersonPageContainer = ({ match, setErrorApi }) => {
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    useEffect(() => {
        (async () => {
            const id = match.params.id;
            const res = await getApiResource(`${API_PERSON}/${id}`);
            // const res = await getApiResource();
            if (res) {
                // res.map(({ id, name, img, desc }) => {
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
                //     }
                // });

                res.map(({ name, img, nickname, category, birthday }) => {
                    setPersonInfo([
                        { title: 'Nickname', data: nickname },
                        { title: 'Category', data: category },
                        { title: 'Birthday', data: birthday },
                    ]);
                    setPersonName(name);
                    setPersonPhoto(img);
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
                    />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
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
