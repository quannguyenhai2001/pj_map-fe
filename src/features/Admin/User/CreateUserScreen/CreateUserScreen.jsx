import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import FormikTextField from 'components/FormElements/FormikTextField/FormikTextField';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchAsyncCreateUser } from 'redux/slices/UserSlice';
import { createManuSchema, initCreateManufacturers } from 'utils/FormValidate';
import { Toast } from 'utils/Toast';

const CreateUserScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const submitHandle = async (values) => {
        console.log(values)
        try {
            const payload = { ...values }
            await dispatch(fetchAsyncCreateUser(payload))
            Toast('success', "Tạo nhà cung cấp thành công!");
            navigate("/dashboard")

        } catch (err) {
            Toast('warning', "Lỗi!");
        }
    }
    return (
        <Container maxWidth="md">
            <Typography variant="h2" fontWeight="bold" fontSize="30px" mb={30}>
                Tạo người dùng
            </Typography>
            <Formik
                initialValues={initCreateManufacturers}
                onSubmit={(values, { setFieldError }) => {
                    submitHandle(values, setFieldError);
                }}
            >
                {({
                    errors,
                    values,
                    setFieldValue,
                    handleBlur,
                    isValid,
                    dirty,
                    setFieldError,
                    ...rest
                }) => (
                    <Form>
                        <Stack direction="column" spacing={20} mb="30px" >
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Grid item xs={4} sm={4} md={4} lg={2} xl={4}>
                                    Tên hiển thị
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <FormikTextField
                                        size="small"
                                        variant="outlined"
                                        id="username"
                                        name="username"
                                        label="Tên hiển thị"
                                        onBlur={e => {
                                            handleBlur(e);
                                            setFieldValue(
                                                "username",
                                                values.username.trim(),
                                                true
                                            );
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Grid item xs={4} sm={4} md={4} lg={2} xl={4}>
                                    Email
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <FormikTextField
                                        size="small"
                                        variant="outlined"
                                        id="email"
                                        name="email"
                                        label="Email"
                                        onBlur={e => {
                                            handleBlur(e);
                                            setFieldValue(
                                                "email",
                                                values.email.trim(),
                                                true
                                            );
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Grid item xs={4} sm={4} md={4} lg={2} xl={4}>
                                    Password
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <FormikTextField
                                        size="small"
                                        variant="outlined"
                                        id="password"
                                        name="password"
                                        label="Password"
                                        onBlur={e => {
                                            handleBlur(e);
                                            setFieldValue(
                                                "password",
                                                values.password.trim(),
                                                true
                                            );
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Stack>
                        <Box display="flex" justifyContent="center" gap="30px" maxWidth="500px">
                            <Button
                                sx={{ minWidth: "100px" }}
                                size="large"
                                variant="contained"
                                onClick={() => navigate(-1)}

                            >
                                Hủy
                            </Button>

                            <Button
                                sx={{ minWidth: "100px" }}
                                size="large"
                                variant="contained"
                                color="signature"
                                type="submit"
                                disabled={!dirty || !isValid}
                            >
                                Lưu
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Container >
    );
};

export default CreateUserScreen;