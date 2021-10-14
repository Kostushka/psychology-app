import HomePageContainer from '@containers/HomePageContainer';
import PeoplePageContainer from '@containers/PeoplePageContainer';
import NotFoundPageContainer from '@containers/NotFoundPageContainer/NotFoundPageContainer';
import PersonPageContainer from '@containers/PersonPageContainer';

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
        path: '/people/:id',
        exact: true,
        component: PersonPageContainer,
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
