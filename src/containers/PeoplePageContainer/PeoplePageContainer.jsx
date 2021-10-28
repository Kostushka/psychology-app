import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import PeoplePage from '@components/PeoplePage';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { useQueryParams } from '@hooks/useQueryParams';
import { getApiResource } from '@utils/network';

const PeoplePageContainer = ({ setErrorApi }) => {
    const [people, setPeople] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [countPeoplePage] = useState(5);

    const query = useQueryParams();
    const pageId = query.get('page');

    useEffect(() => {
        setCurrentPage(pageId);
    }, []);

    const getResourse = async () => {
        const res = await getApiResource();
        if (res) {
            const peopleList = res.map(({ id, name, img }) => {
                return {
                    id,
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
        getResourse();
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
            <PeopleNavigation
                pageNumbers={pageNumbers}
                paginator={paginator}
                id={pageId}
            />
        </>
    );
};

PeoplePageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePageContainer);
