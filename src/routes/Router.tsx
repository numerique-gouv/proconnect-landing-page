import {
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom';
import WrapperLayout from '../Pages/WrapperLayout';
import HomeLayout from '../Pages/HomeLayout';
import FakeLayout from '../Pages/FakeLayout';
import Roadmap from '../Pages/Roadmap';
import ServiceDirectory from '../Pages/ServiceDirectory';
import SiteMap from '../Pages/SiteMap';

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
          <FakeLayout></FakeLayout>
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
          <FakeLayout></FakeLayout>
        </WrapperLayout>
      ),
    },
    {
      path: '/plan-du-site',
      element: (
        <WrapperLayout>
          <SiteMap/>
        </WrapperLayout>
      ),
    },
])

function Router() {
    return <RouterProvider router={router} />;
}

export { Router };
