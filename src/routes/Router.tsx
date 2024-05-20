import {
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom';
import WrapperLayout from '../Pages/WrapperLayout';
import HomeLayout from '../Pages/HomeLayout';
import FakeLayout from '../Pages/FakeLayout';
import Roadmap from '../Pages/Roadmap';

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
          <FakeLayout></FakeLayout>
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
])

function Router() {
    return <RouterProvider router={router} />;
}

export { Router };
