import { Box, Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useContent } from "./content.styles";
import { useState, useEffect } from "react";
import { fetchAsyncGetAllPost } from "redux/slices/PostsSlice";
import { Toast } from "utils/Toast";
import { useDispatch } from "react-redux";
import BoxContent from "components/Box/box";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Footer from "components/Footer/footer";

const showList = (list) => {
    return (
        <Box>
             <List >
                    {list.map((item, index) => (
                        <ListItem key={index}>
                            <Link sx={{textDecoration: 'none',color: '#333', "&:hover" : {color: "#ca0000", cursor: "pointer"}}} href="#">
                                {item}
                            </Link>
                        </ListItem>
                    ))}
              </List>
        </Box>
    )
}

const Content = () => {
    const [list, setList] = useState([])
    const dispatch = useDispatch();
    const content = useContent()

    useEffect(() => {
        (async () => {
            try{
                const res = await dispatch(fetchAsyncGetAllPost())
                setList(res.payload.productDatas)
                console.log(res.payload.productDatas)
            } catch(e) {
                Toast('warning', "Lỗi!");
            } 
        })()
    }, [dispatch])
    const contentKg = ["Không gian dạy và học Lịch sử 6", "Không gian dạy và học Lịch sử 7", "Không gian dạy và học Lịch sử 8", "Không gian dạy và học Lịch sử 9"]

    const contentKg1 = ["Dạy và học Lịch sử lớp 10", "Dạy và học Lịch sử lớp 11", "Dạy và học Lịch sử lớp 12"]

    const contentKg2 = ["Dạy và học Lịch sử địa phương TP Hà Nội","Dạy và học Lịch sử địa phương tỉnh Quảng Trị"]

    const contentKg3 = ["Di tích Đình Chèm", "Lễ hội Đình Chèm", "Văn Miếu Quốc Tử Giám"]
    
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
                        {list.map(item => (
                            <Box className={content.showList}>
                                <Box className={content.img}>
                                    <img src="123" alt="anh" />
                                </Box>
                                <Box className={content.entryContent}>
                                    <Typography sx={{display: "block",fontSize: "13px",color: "#ca0000",fontWeight: "500",textTransform: "uppercase",margin: "0 0 5px"}}>
                                        {item.title}
                                    </Typography>
                                    <Typography>
                                        <Link className={content.linkPara} href="#">paragraph</Link>
                                    </Typography>
                                    <Typography sx={{fontSize: "13px", margin: "8px 0 0"}}>content</Typography>
                                </Box>
                            </Box>  
                        ))}
                    </Box>
                    <Box sx={{position: "relative",float: "left",width: "100%",padding: "0 0 8px 20px",marginTop: "-30px", textAlign:"center"}}>KHÔNG TÌM THẤY KẾT QUẢ NÀO</Box>
                    <Box sx={{fontFamily: "'Roboto Condensed', Arial, sans-serif",fontWeight: "700", fontSize: "15px"}}>Những bài viết liên quan</Box>
                    <Box className={content.thumb}>
                        <Link className={content.link1} href="#">
                            <span class={content.span} data-image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaigKfU1iSHttPe3LTvl3TUeU97foBd-Aao8hZpdQhJE0Q6kV0-HuKVMxpOqhxv8zBingNO2dsPmOhqe-CTycfUtEXHAVzBBrB6ur52px2XarjzdkPzPIrZ9HjmH46Bx0Buw7R2WmQVtFmgjNIYEKo7QgOmaC6ArWUw0xcZJAfcLlgginaZDNGPez2hFvA/w72-h72-p-k-no-nu/IMG20221126153543.jpg"></span>
                        </Link>
                        <Box className={content.footContent}>
                            <Typography className={content.paraFoot}>Tài liệu di tích lịch sử</Typography>
                            <Typography className={content.linkFoot}>
                                <Link sx={{color: "#fff",textShadow: "0 1px 2px rgba(0,0,0,0.1)", textDecoration: "none"}} href="#">TƯ LIỆU VỀ HOÀNG THÀNH THĂNG LONG </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={content.sidebar}>
                        <Box>
                            <BoxContent title="VIDEO" />
                        </Box>
                        <Box>
                            <BoxContent title="KHÔNG GIAN DẠY HỌC THCS" content={showList(contentKg)} />
                        </Box>
                        <Box>
                            <BoxContent title="KHÔNG GIAN DẠY VÀ HỌC THPT" content={showList(contentKg1)} />
                        </Box>
                        <Box>
                            <BoxContent title="KHÔNG GIAN DẠY HỌC LỊCH SỬ ĐỊA PHƯƠNG" content={showList(contentKg2)} />
                        </Box>
                        <Box>
                            <BoxContent title="TÀI LIỆU HỌC TẬP, NGHIÊN CỨU" content={showList(contentKg3)}/>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </Box>
    )
}
export default Content;