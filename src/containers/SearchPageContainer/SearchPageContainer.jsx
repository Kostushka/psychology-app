import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import { getApiResource } from '@utils/network';
import { API_PERSON_SEARCH } from '@constants/api';
import { withErrorApi } from '@hoc-helper/withErrorApi';
import { debounce } from 'lodash';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@ui/UiInput';

import styles from './SearchPageContainer.module.css';

const SearchPageContainer = ({ setErrorApi }) => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [people, setPeople] = useState([]);
    // const [peopleSearch, setPeopleSearch] = useState([]);

    const getResponce = async (param) => {
        const res = await getApiResource(API_PERSON_SEARCH + param);
        // const getResponce = async () => {
        //     const res = await getApiResource();
        if (res) {
            const peopleList = res.map(({ char_id, name, img }) => {
                return {
                    id: char_id,
                    name,
                    img,
                };
            });

            // if (people) {
            //     const filterPeople = people.filter((p) => {
            //         return p.name
            //             .toLowerCase()
            //             .includes(inputSearchValue.toLowerCase());
            //     });
            //     const peopleList = filterPeople.map(({ id, name, img }) => {
            //         return {
            //             id,
            //             name,
            //             img,
            //         };
            //     });
            //     setPeopleSearch(peopleList);
            // }
            // setPeople(res);
            setPeople(peopleList);
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    };

    useEffect(() => {
        getResponce('');
    }, []);

    const debouncedGetResponse = useCallback(
        debounce((value) => getResponce(value), 300),
        []
    );

    const handleInputChange = (value) => {
        setInputSearchValue(value);
        // getResponce();
        debouncedGetResponse(value);
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

            <SearchPageInfo people={people} />
            {/* <SearchPageInfo peopleSearch={peopleSearch} /> */}
        </>
    );
};

SearchPageContainer.propTypes = {
    setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPageContainer);
