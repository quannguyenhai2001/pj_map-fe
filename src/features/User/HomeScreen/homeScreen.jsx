import Header from "components/Header/Header"
import React from "react"
import Container from '@mui/material/Container';
import { Box } from "@mui/material";

const HomeScreen = () => {
    return(
    <Box sx={{backgroundColor: "red"}}>
        <Container maxWidth="lg">
            <Header param={"CHÀO MỪNG BẠN ĐẾN VỚI HÀNH TRÌNH KHÁM PHÁ DI SẢN VIỆT NAM"} />
        </Container>
    </Box>       
    )
}
export default HomeScreen