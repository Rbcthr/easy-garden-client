import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../component/Home";
import ExploreGardeners from "../component/ExploreGardeners";
import BrowseTips from "../component/BrowseTips";
import ShareAGardenTip from "../component/ShareAGardenTip";
import MyTips from "../component/MyTips";
import Register from "../component/Register";
import Login from "../component/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../component/ErrorPage";
import TipDetailsPage from "../component/TipDetailsPage";
import LoadingState from "../component/LoadingState";
import UpdateTipPage from "../component/UpdateTipPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        hydrateFallbackElement: <LoadingState></LoadingState>,
        loader: () => fetch("http://localhost:3000/tip-info"),
        Component: Home,
      },
      {
        path: "/explore-gardeners",
        hydrateFallbackElement: <LoadingState></LoadingState>,
        loader: () => fetch("http://localhost:3000/explore-gardeners"),
        Component: ExploreGardeners,
      },
      {
        path: "/browse-tips",
        hydrateFallbackElement: <LoadingState></LoadingState>,
        loader: () => fetch("http://localhost:3000/tip-info-public"),
        Component: BrowseTips,
      },
      {
        path: "/share-a-garden-tip",
        element: (
          <PrivateRoute>
            <ShareAGardenTip></ShareAGardenTip>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tips",
        hydrateFallbackElement: <LoadingState></LoadingState>,
        loader: () =>
          fetch("http://localhost:3000/tip-info-public-and-private"),
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/tip-details/:id",
        hydrateFallbackElement: <LoadingState></LoadingState>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tip-info-public/${params.id}`),
        element: (
          <PrivateRoute>
            <TipDetailsPage></TipDetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tip/:id",
        hydrateFallbackElement: <LoadingState></LoadingState>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/tip-info-public/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateTipPage></UpdateTipPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
