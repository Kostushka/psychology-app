import HomePageContainer from '@containers/HomePageContainer';
import PeoplePageContainer from '@containers/PeoplePageContainer';
import NotFoundPageContainer from '@containers/NotFoundPageContainer/NotFoundPageContainer';
import PersonPageContainer from '@containers/PersonPageContainer';
import FavoritePageContainer from '@containers/FavoritePageContainer';
import SearchPageContainer from '@containers/SearchPageContainer';

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
