import BlankLayout from "layouts/BlankLayout/BlankLayout";
import AdminLayout from "layouts/AdminLayout/AdminLayout";
import UsersScreen from "features/Admin/User/UsersScreen/UsersScreen";
import SignInScreen from "features/Auth/SignInScreen/SignInScreen";
import HomeScreen from "features/User/HomeScreen/homeScreen";
import CreateUserScreen from "features/Admin/User/CreateUserScreen/CreateUserScreen";
import PostScreen from "features/Admin/Post/PostScreen/PostScreen";
import CreatePostScreen from "features/Admin/Post/CreatePostScreen/CreateUserScreen";

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
]