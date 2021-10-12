import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { withErrorApi } from '@hoc-helper/withErrorApi';
import PeoplePage from '@components/PeoplePage';
// import { getPeopleId, getPeopleImage } from '@services/getPeopleData';
import { getApiResource } from '@utils/network';
import { API_CHARACTERS } from '@constants/api';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
// import { API_ROOT } from '@constants/api';
// import { API_PEOPLE } from '@constants/api';
// import { useQueryParams } from '@hooks/useQueryParams';

// import styles from './PeoplePageContainer.module.css';

const PeoplePageContainer = ({ setErrorApi }) => {
    const [people, setPeople] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPeoplePage] = useState(10);

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

    const lastPeopleIndex = currentPage * countPeoplePage;
    const firstPeopleIndex = lastPeopleIndex - countPeoplePage;
    const currentCountPeoplePage = people.slice(
        firstPeopleIndex,
        lastPeopleIndex
    );

    const paginator = (number) => setCurrentPage(number);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(people.length / countPeoplePage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {people && <PeoplePage people={currentCountPeoplePage} />}
            <PeopleNavigation pageNumbers={pageNumbers} paginator={paginator} />
        </>
    );
};

PeoplePageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePageContainer);
