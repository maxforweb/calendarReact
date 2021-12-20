import { Login, Event } from '../pages';


export const publicRoutes = [
    { 
        path: '/login', 
        exact: true,
        component: Login
    }
]

export const privateRoutes = [
    { 
        path: '/', 
        exact: true,
        component: Event
    }
]
