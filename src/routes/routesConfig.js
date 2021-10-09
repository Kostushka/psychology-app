import HomePageContainer from '@containers/HomePageContainer';
import PeoplePageContainer from '@containers/PeoplePageContainer';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePageContainer,
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePageContainer,
    },
];

export default routesConfig;
