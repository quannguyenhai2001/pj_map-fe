import PrivateRoutes from "routes/PrivateRoute";
import HomeScreen from "pages/home_screen/HomeScreen";
import SignIn from "pages/sign_in/SignIn";
import SignUpUser from "pages/sign_up_user/SignUpUser";
import HomePageUser from "pages/home_page_user/HomePageUser";
import { Routes, Route } from 'react-router-dom'

export const RouteConfigs = [
    {
      path: '/',
      element: <HomeScreen />,
      isPrivate: false,
    },
    {
      path: '/signUpUser',
      element: <SignUpUser />,
      isPrivate: false,
    },
    {
      path: '/signin',
      element: <SignIn />,
      isPrivate: false,
    },
    {
      path: '/user/:id',
      element: <HomePageUser />,
      isPrivate: true,
      requiredRole: "user" 
    },
  ];

  
export const RenderRoutes = () => {
    return (
      <Routes>
        {RouteConfigs.map((route, index) => (
        <Route element={<PrivateRoutes {...route}/>}>
            <Route
                key={index}
                path={route.path}
                element={route.element}
            />
        </Route>
        ))}
      </Routes>
    );
  };