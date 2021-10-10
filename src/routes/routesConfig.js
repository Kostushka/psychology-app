import HomePageContainer from '@containers/HomePageContainer';
import PeoplePageContainer from '@containers/PeoplePageContainer';
import NotFoundPageContainer from '@containers/NotFoundPageContainer/NotFoundPageContainer';

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
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPageContainer,
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPageContainer,
    },
];

export default routesConfig;
