import BlankLayout from "layouts/BlankLayout/BlankLayout";
import AdminLayout from "layouts/AdminLayout/AdminLayout";
import UsersScreen from "features/Admin/User/UsersScreen/UsersScreen";
import SignInScreen from "features/Auth/SignInScreen/SignInScreen";
import HomeScreen from "features/User/HomeScreen/homeScreen";
import CreateUserScreen from "features/Admin/User/CreateUserScreen/CreateUserScreen";
import PostScreen from "features/Admin/Post/PostScreen/PostScreen";
import CreatePostScreen from "features/Admin/Post/CreatePostScreen/CreateUserScreen";
import CamLo from "features/User/CamLo/camlo";
import HaNoi from "features/User/HaNoi/hanoi";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import QTG from "features/User/QuocTuGiam/QTG";
import HTTL from "features/User/HoangThanhTL/HTTL";

export const RouteConfigs = [
    {
        path: "/sign-in",
        element: SignInScreen,
        isPrivate: false,
        layout: BlankLayout,
    },
    {
        path: "/dashboard",
        element: UsersScreen,
        isPrivate: false,
        layout: AdminLayout,
    },
    {
        path: "/",
        element: HomeScreen,
        isPrivate: false,
        layout: BlankLayout,
    },
    {
        path: "/dashboard/create-user",
        element: CreateUserScreen,
        isPrivate: false,
        layout: AdminLayout,
    },
    {
        path: "/dashboard/posts",
        element: PostScreen,
        isPrivate: false,
        layout: AdminLayout,
    },
    {
        path: "/dashboard/create-post",
        element: CreatePostScreen,
        isPrivate: false,
        layout: AdminLayout,
    },
    {
        path: "/user/quangtri",
        element: CamLo,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/user/hanoi",
        element: HaNoi,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/user/quoctugiam",
        element: QTG,
        isPrivate: false,
        layout: DefaultLayout,
    },
    {
        path: "/user/hoangthanh",
        element: HTTL,
        isPrivate: false,
        layout: DefaultLayout,
    },
]