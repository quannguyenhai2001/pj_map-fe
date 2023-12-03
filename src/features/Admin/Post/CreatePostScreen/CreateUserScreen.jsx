import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import FormikTextField from 'components/FormElements/FormikTextField/FormikTextField';
import { Form, Formik } from 'formik';
import React from 'react';
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAsyncCreateUser } from 'redux/slices/UserSlice';
import { initCreatePost } from 'utils/FormValidate';
import { Toast } from 'utils/Toast';
import "./CreateProductScreen.css";
import { fetchAsyncCreatePost } from 'redux/slices/PostsSlice';

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
];
const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: [] }],
        [{ font: [] }],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ color: ["red", "#785412"] }],
        [{ background: ["red", "#785412"] }]
    ]
};
const CreatePostScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [productInformation, setProductInformation] = React.useState("")
    const submitHandle = async (values) => {
        console.log(values)
        try {
            const payload = { ...values, content: productInformation }
            await dispatch(fetchAsyncCreatePost(payload))
            Toast('success', "Tạo bài viết thành công!");
            navigate("/dashboard/posts")

        } catch (err) {
            Toast('warning', "Lỗi!");
        }
    }
    console.log(productInformation)
    return (
        <Container maxWidth="md">
            <Typography variant="h2" fontWeight="bold" fontSize="30px" mb={30}>
                Tạo bài viết
            </Typography>
            <Formik
                initialValues={initCreatePost}
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
                                    Tiêu đề
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <FormikTextField
                                        size="small"
                                        variant="outlined"
                                        id="title"
                                        name="title"
                                        label="Tiêu đề"
                                        onBlur={e => {
                                            handleBlur(e);
                                            setFieldValue(
                                                "title",
                                                values.title.trim(),
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
                                    Ý chính
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={8} xl={4}>
                                    <FormikTextField
                                        size="small"
                                        variant="outlined"
                                        id="paragraph"
                                        name="paragraph"
                                        label="Ý chính"
                                        onBlur={e => {
                                            handleBlur(e);
                                            setFieldValue(
                                                "paragraph",
                                                values.paragraph.trim(),
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
                                <Grid item xs={4} sm={4} md={4} lg={8} xl={8}>
                                    <ReactQuill theme="snow" modules={modules} formats={formats} value={productInformation} onChange={setProductInformation} />
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

export default CreatePostScreen;