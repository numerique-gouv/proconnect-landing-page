import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WrapperLayout from "../Pages/WrapperLayout";
import HomeLayout from "../Pages/HomeLayout";
import Roadmap from "../Pages/Roadmap";
import Services from "../Pages/Services";
import SiteMap from "../Pages/SiteMap";
import Cgu from "../Pages/Cgu";
import LegalNotices from "../Pages/LegalNotices";
import Stats from "../Pages/Stats";
import SiteRecommandation from "../Pages/SiteRecommandation/SiteRecommandation";
import SiteRecommandationTest from "../Pages/SiteRecommandation/SiteRecommandationTest";
import NotFound from "../Pages/NotFound";
import MonCompte from "../Pages/MonCompte";
import PostAuthentification from "../Pages/PostAuthentication";
import PostLogout from "../Pages/PostLogout";
import AuthenticationError from "../Pages/AuthenticationError";
import { Accessibility } from "../Pages/Accessibility";

const router = createBrowserRouter([
  {
    errorElement: (
      <WrapperLayout>
        <NotFound />
      </WrapperLayout>
    ),
    children: [
      {
        path: "/",
        element: (
          <WrapperLayout>
            <HomeLayout />
          </WrapperLayout>
        ),
      },
      {
        path: "/services",
        element: (
          <WrapperLayout>
            <Services></Services>
          </WrapperLayout>
        ),
      },
      {
        path: "/accessibilite",
        element: (
          <WrapperLayout>
            <Accessibility />
          </WrapperLayout>
        ),
      },
      {
        path: "/recommandation-test",
        element: (
          <WrapperLayout>
            <SiteRecommandationTest />
          </WrapperLayout>
        ),
      },
      {
        path: "/recommandation/:employer",
        element: (
          <WrapperLayout>
            <SiteRecommandation />
          </WrapperLayout>
        ),
      },

      {
        path: "/feuille-de-route",
        element: (
          <WrapperLayout>
            <Roadmap></Roadmap>
          </WrapperLayout>
        ),
      },
      {
        path: "/plan-du-site",
        element: (
          <WrapperLayout>
            <SiteMap />
          </WrapperLayout>
        ),
      },
      {
        path: "/cgu",
        element: (
          <WrapperLayout>
            <Cgu />
          </WrapperLayout>
        ),
      },
      {
        path: "/mentions-legales",
        element: (
          <WrapperLayout>
            <LegalNotices />
          </WrapperLayout>
        ),
      },
      {
        path: "/stats",
        element: (
          <WrapperLayout>
            <Stats />
          </WrapperLayout>
        ),
      },
      {
        path: "/post-authentication",
        element: (
          <WrapperLayout>
            <PostAuthentification />
          </WrapperLayout>
        ),
      },
      {
        path: "/post-logout",
        element: (
          <WrapperLayout>
            <PostLogout />
          </WrapperLayout>
        ),
      },
      {
        path: "/authentication-error",
        element: (
          <WrapperLayout>
            <AuthenticationError />
          </WrapperLayout>
        ),
      },
      {
        path: "/mon-compte",
        element: (
          <WrapperLayout>
            <MonCompte />
          </WrapperLayout>
        ),
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
