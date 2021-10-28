import PropTypes from 'prop-types';
import { useState } from 'react';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import UiInput from '@ui/UiInput';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import { getApiResource } from '@utils/network';

import styles from './SearchPageContainer.module.css';

const SearchPageContainer = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);
    const [peopleSearch, setPeopleSearch] = useState([]);

    const getResponce = async () => {
        const res = await getApiResource();
        if (res) {
            if (people) {
                const filterPeople = people.filter((p) => {
                    return p.name
                        .toLowerCase()
                        .includes(inputSearchValue.toLowerCase());
                });
                const peopleList = filterPeople.map(({ id, name, img }) => {
                    return {
                        id,
                        name,
                        img,
                    };
                });
                setPeopleSearch(peopleList);
            }
            setPeople(res);

            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    const handleInputChange = (value) => {
        setInputSearchValue(value);
        getResponce();
    };
    return (
        <>
            <h1 className='header__text'>Поиск</h1>
            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder='Введите имя'
                classes={styles.input__search}
            />

            <SearchPageInfo peopleSearch={peopleSearch} />
        </>
    );
};

SearchPageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPageContainer);
