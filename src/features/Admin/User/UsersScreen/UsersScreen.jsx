import React, { useState, useEffect } from "react";
import {

    AddCircleOutline,

} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

import qs from "query-string";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import AppPaginate from "components/AppPaginate/AppPaginate";


import ProductsTable from "./components/ProductsTable/ProductsTable";
import { Toast } from "utils/Toast";

import { fetchAsyncGetAllUsers } from "redux/slices/UserSlice";


const initialPageInfo = {
    page: 1,
    total: 0,
    total_page: 1,
};

const UsersScreen = () => {
    const [users, setUsers] = useState([]);
    const [pageInfo, setPageInfo] = useState(initialPageInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isActionButton, setIsActionButton] = useState(false)
    const [openDeleteProductModal, setOpenDeleteProductModal] = useState(false);
    const [userDeleteID, setUserDeleteID] = useState("")
    // Search and paginate
    const location = useLocation();
    const qsParsed = qs.parse(location.search);
    // load page - fill data in fields search


    // call API
    useEffect(() => {
        (async () => {
            try {
                const res = await dispatch(
                    fetchAsyncGetAllUsers({
                        ...qsParsed,
                        use_page: 1,
                    })
                ).unwrap();

                setUsers(res.users)

                // if (res.data.users === 0) {
                //     Toast('warning', "Không có kết quả!");
                // }
            } catch (e) {
                setUsers([]);
                setPageInfo(initialPageInfo);
                Toast('warning', "Lỗi!");
            }
        })();
    }, [location.search, isActionButton, dispatch]);






    return (
        <Box >
            <Stack direction="column" spacing={20} height="100%">
                <Stack direction="column" spacing={20}>
                    <Typography variant="h2" fontWeight="bold" fontSize="30px">
                        Danh sách người dùng
                    </Typography>
                </Stack>
                <Box>
                    <Stack
                        direction="row"
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <AppPaginate
                            count={pageInfo.total_page}
                            page={pageInfo.page}
                            sx={{ marginTop: "auto" }}

                        />

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <Button
                                startIcon={<AddCircleOutline />}
                                sx={{
                                    width: "120px",
                                }}
                                onClick={() =>
                                    navigate("/dashboard/create-user")
                                }
                                size="small"
                                variant="contained"
                                color="signature"
                            >
                                Tạo mới
                            </Button>
                        </Box>
                    </Stack>
                </Box>
                <Box spacing={20} height="100%">
                    <ProductsTable
                        users={users}
                        setUsers={setUsers}
                        pageInfo={pageInfo}
                        setUserDeleteID={setUserDeleteID}
                        setOpenDeleteProductModal={setOpenDeleteProductModal}

                    />
                </Box>
            </Stack >

        </Box >
    );
};

export default UsersScreen;