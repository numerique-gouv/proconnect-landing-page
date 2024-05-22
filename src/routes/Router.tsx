import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WrapperLayout from '../Pages/WrapperLayout';
import HomeLayout from '../Pages/HomeLayout';
import Roadmap from '../Pages/Roadmap';
import ServiceDirectory from '../Pages/ServiceDirectory';
import SiteMap from '../Pages/SiteMap';
import InConstruction from '../Pages/InConstruction';

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
        path: '/annuaire',
        element: (
            <WrapperLayout>
                <ServiceDirectory></ServiceDirectory>
            </WrapperLayout>
        ),
    },
    {
        path: '/partenaires',
        element: (
            <WrapperLayout>
                <InConstruction></InConstruction>
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
]);

function Router() {
    return <RouterProvider router={router} />;
}

export { Router };
