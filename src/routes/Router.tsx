import {
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom';
import WrapperLayout from '../Pages/WrapperLayout';
import HomeLayout from '../Pages/HomeLayout';
import FakeLayout from '../Pages/FakeLayout';

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
])

function Router() {
    return <RouterProvider router={router} />;
}

export { Router };
