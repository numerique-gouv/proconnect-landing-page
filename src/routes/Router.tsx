import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WrapperLayout from '../Pages/WrapperLayout';
import HomeLayout from '../Pages/HomeLayout';
import Roadmap from '../Pages/Roadmap';
import Services from '../Pages/Services';
import SiteMap from '../Pages/SiteMap';
import InConstruction from '../Pages/InConstruction';
import Partners from '../Pages/Partners';
import Cgu from '../Pages/Cgu';
import LegalNotices from '../Pages/LegalNotices';
import Stats from '../Pages/Stats';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <WrapperLayout>
                <HomeLayout />
            </WrapperLayout>
        ),
    },
    {
        path: '/services',
        element: (
            <WrapperLayout>
                <Services></Services>
            </WrapperLayout>
        ),
    },
    {
        path: '/partenaires',
        element: (
            <WrapperLayout>
                <Partners></Partners>
            </WrapperLayout>
        ),
    },
    {
        path: '/feuille-de-route',
        element: (
            <WrapperLayout>
                <Roadmap></Roadmap>
            </WrapperLayout>
        ),
    },
    {
        path: '/aide',
        element: (
            <WrapperLayout>
                <InConstruction></InConstruction>
            </WrapperLayout>
        ),
    },
    {
        path: '/plan-du-site',
        element: (
            <WrapperLayout>
                <SiteMap />
            </WrapperLayout>
        ),
    },
    {
        path: '/cgu',
        element: (
            <WrapperLayout>
                <Cgu />
            </WrapperLayout>
        ),
    },
    {
        path: '/mentions-legales',
        element: (
            <WrapperLayout>
                <LegalNotices />
            </WrapperLayout>
        ),
    },
    {
        path: '/stats',
        element: (
            <WrapperLayout>
                <Stats />
            </WrapperLayout>
        ),
    },
]);

function Router() {
    return <RouterProvider router={router} />;
}

export { Router };
