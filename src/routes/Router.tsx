import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WrapperLayout from "../Pages/WrapperLayout";
import HomeLayout from "../Pages/HomeLayout";
import Roadmap from "../Pages/Roadmap";
import Services from "../Pages/Services";
import SiteMap from "../Pages/SiteMap";
import Cgu from "../Pages/Cgu";
import LegalNotices from "../Pages/LegalNotices";
import Stats from "../Pages/Stats";
import EligibilityTest from "../Pages/Eligibility/EligibilityTest";
import { PublicResult } from "../Pages/Eligibility/PublicResult";
import { PrivateResult } from "../Pages/Eligibility/PrivateResult";
import NotFound from "../Pages/NotFound";

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
        path: "/eligibilite",
        element: (
          <WrapperLayout>
            <EligibilityTest />
          </WrapperLayout>
        ),
      },
      {
        path: "/eligibilite/public",
        element: (
          <WrapperLayout>
            <PublicResult />
          </WrapperLayout>
        ),
      },
      {
        path: "/eligibilite/private",
        element: (
          <WrapperLayout>
            <PrivateResult />
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
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
