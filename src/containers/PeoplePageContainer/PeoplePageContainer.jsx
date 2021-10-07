import { useEffect, useState } from 'react';
import { API_CHARACTERS } from '../../constants/api';
import { getApiResource } from '../../utils/network';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
// import { getPeopleId } from '../../services/getPeopleData';
// import { getPeopleImage } from '../../services/getPeopleData';
import styles from './PeoplePageContainer.module.css';
import PeoplePage from '../../components/PeoplePage/PeoplePage';

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

    return <>{people && <PeoplePage people={people} />}</>;
};

export default withErrorApi(PeoplePageContainer);
