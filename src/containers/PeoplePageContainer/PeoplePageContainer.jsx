import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { withErrorApi } from '@hoc-helper/withErrorApi';
import PeoplePage from '@components/PeoplePage';
// import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { getApiResource } from '@utils/network';
import { API_CHARACTERS } from '@constants/api';

// import styles from './PeoplePageContainer.module.css';

const PeoplePageContainer = ({ setErrorApi }) => {
    const [people, setPeople] = useState([]);

    const getResourse = async (url) => {
        const res = await getApiResource(url);
        if (res) {
            const peopleList = res.map(({ char_id, name, img }) => {
                // const id = getPeopleId(url);
                // const img = getPeopleImage(id);
                return {
                    id: char_id,
                    name,
                    img,
                };
            });
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getResourse(API_CHARACTERS);
    }, []);

    return (
        <>
            <h1 className='header__text'>Навигация</h1>
            {people && <PeoplePage people={people} />}
        </>
    );
};

PeoplePageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePageContainer);
