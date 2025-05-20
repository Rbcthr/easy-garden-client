import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../component/Home";
import ExploreGardeners from "../component/ExploreGardeners";
import BrowseTips from "../component/BrowseTips";
import ShareAGardenTip from "../component/ShareAGardenTip";
import MyTips from "../component/MyTips";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/explore-gardeners',
            Component: ExploreGardeners
        },
        {
            path: '/browse-tips',
            Component: BrowseTips
        },
        {
            path: '/share-a-garden-tip',
            Component: ShareAGardenTip
        },
        {
            path: '/my-tips',
            Component: MyTips
        },
    ]
  },
]);
