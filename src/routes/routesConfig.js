import HomePageContainer from '@containers/HomePageContainer';
import PeoplePageContainer from '@containers/PeoplePageContainer';
import NotFoundPageContainer from '@containers/NotFoundPageContainer/NotFoundPageContainer';
import PersonPageContainer from '@containers/PersonPageContainer';
import FavoritePageContainer from '@containers/FavoritePageContainer';
import SearchPageContainer from '@containers/SearchPageContainer';
import ErrorMessage from '@components/ErrorMessage';

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
        path: '/search',
        exact: true,
        component: SearchPageContainer,
    },
    {
        path: '/fail',
        exact: true,
        component: ErrorMessage,
    },
    {
        path: '/not-found',
        exact: true,
        component: NotFoundPageContainer,
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritePageContainer,
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPageContainer,
    },
];

export default routesConfig;
