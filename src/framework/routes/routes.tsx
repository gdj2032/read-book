import Container from '@/framework/container';
import Login from '@/framework/login';
import UserPagePath from '@/pages/pageRoutes'
import autoImport from './autoImport';
import Home from '@/pages/home';

export const PathConfig = {
    login: '/login',
    ...UserPagePath,
};

export const loginRoute: IRouteOption[] = [
    {
        component: Login,
        path: PathConfig.login,
    },
    {
        redirect: PathConfig.login,
    },
];

export const pageRoute: IRouteOption[] = [
    {
        component: Login,
        path: PathConfig.login,
    },
    {
        path: '/',
        component: Container,
        children: [
            {
                path: '/',
                component: Home, // 默认到达Home
                exact: true,
            },
            ...autoImport(),
        ],
    },
];
