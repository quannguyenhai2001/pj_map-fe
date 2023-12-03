import { Box, Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useContent } from "./content.styles";


const Content = ({param}) => {
    const content = useContent()
    // const limitedData = jsonData.slice(0, 4);
    return (
        <Box>
            <Container maxWidth="lg">
                <Box className={content.container}>
                <Box className={content.content}>
                    <Box className={content.titleContent}>
                        <Typography sx={{color:"#fff", fontSize:"16px", fontWeight: "700"}}>Tài Nguyên Học Tập</Typography>
                        <Link className={content.link} href="#">Xem tất cả</Link>
                    </Box>
                    <Box className={content.listContent}>
                        <Box>1</Box>
                    </Box>
                </Box>
                <Box className={content.sidebar}>
                        <Box>1</Box>
                        <Box>2</Box>
                        <Box>3</Box>
                        <Box>4</Box>
                        <Box>5</Box>
                </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Content;