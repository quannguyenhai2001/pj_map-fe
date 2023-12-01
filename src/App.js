
import { RouterWrapper } from "routes/RouterWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import 'react-quill/dist/quill.snow.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import { themeMainOptions } from "themes/themes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncGetUser } from "redux/slices/UserSlice";


const theme = createTheme(themeMainOptions);
function App() {
  const userInfo = useSelector(state => state.user.userInfo)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch(fetchAsyncGetUser())
    }
  }, [dispatch])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <RouterWrapper />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;