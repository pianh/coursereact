//Layouts

// Pages
import Home from '~/pages/Home';

import AllMeetupsPage from '~/pages/AllMeetups';
import FavoritesPage from '~/pages/Favorites';
import NewMeetupPage from '~/pages/NewMeetup';

const publicRoutes = [
    // K can dang nhap
    { path: '/', component: AllMeetupsPage },
    { path: '/favorites', component: FavoritesPage },
    { path: '/new-meetup', component: NewMeetupPage },
];

const privateRoutes = [
    //Can dang nhap
];

export { publicRoutes, privateRoutes };
