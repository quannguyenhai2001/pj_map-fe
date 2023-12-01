import BlankLayout from "layouts/BlankLayout/BlankLayout";
import AdminLayout from "layouts/AdminLayout/AdminLayout";
import UsersScreen from "features/Admin/User/UsersScreen/UsersScreen";
import SignInScreen from "features/Auth/SignInScreen/SignInScreen";

export const RouteConfigs = [
    {
        path: "/sign-in",
        element: SignInScreen,
        isPrivate: false,
        layout: BlankLayout,
    },
    {
        path: "/dashboard/users",
        element: UsersScreen,
        isPrivate: false,
        layout: AdminLayout,
    },

]