import { Box, Container, Typography } from "@mui/material";
import { useFooter } from "./footer.styles";
import Link from "@mui/material/Link";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const footer = useFooter()
    return (
        <Box className={footer.container}>
            <Container maxWidth="lg">
                <Box className={footer.headFooter}>
                    <Box className={footer.ctFooter}>
                        <Link sx={{padding: "0 25px 0 0"}}>
                            <img style={{display: "block",maxHeight: "34px",margin: 0}} src="https://blogger.googleusercontent.com/img/a/AVvXsEhLc2Yha5JE0LeXwdkVQk6kl8G4vhKXlfoQgycK-wA_aXBd4dmhN9Tw_jH1lm9E5mClU1bTSKBH2WEDBYX1WhOkkJW_5fXcDjSKUfXPFmBX44rfax01WNu4pAvDl-pZ9K6Eu4AzdV8vyJH5hdw1HRXgs4QIvWREcliTUWsfdN010y-30ubE0yD_geexjmiS=s150" alt="KHÔNG GIAN ẢO VỀ CÁC DI SẢN VIỆT NAM"/>
                        </Link>
                        <Box sx={{  display: "flex", flexDirection: "column",flex: 1,}}>
                            <Typography sx={{fontSize: "16px", color: "#fff",textTransform: "uppercase",margin: "0 0 10px"}}>KẾT NỐI LỊCH SỬ VỚI HỌC SINH</Typography>
                            <Typography sx={{fontSize: "14px",color: "#afafaf",margin: 0,}}>Thủ đô Hà Nội là trung tâm chính trị, kinh tế, văn hóa và khoa học công nghệ của cả nước. Nằm hai bên bờ sông Hồng, giữa vùng đồng bằng Bắc bộ trù phú, Hà Nội có được vị thế thuận lợi để trở thành nơi giao lưu thương mại trong nước và quốc tế. Trải qua lịch sử hàng nghìn năm văn hiến, Hà Nội vẫn bảo tồn được rất nhiều di tích văn hóa nổi tiếng, với hơn 600 đền, chùa. Mặc dù một số di tích bị mai một đi cùng với thời gian và do chiến tranh, Hà Nội vẫn còn giữ được nhiều danh lam thắng cảnh. Những di tích lịch sử trên địa bàn thủ đô Hà Nội là nguồn sử liệu quan trọng cho việc giảng dạy và nghiên cứu lịch sử hiện nay.</Typography>
                        </Box>
                    </Box>
                    <Box className={footer.scFooter}>
                        <List sx={{display: "flex", flexDirection: "row"}}>
                            <ListItem>
                                <Link href="https://www.facebook.com/Ketnoilichsu" rel="noopener noreferrer" target="_blank" title="facebook">
                                    <FaFacebook style={{fontSize:"18px", color: "#fff"}} />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.youtube.com/channel/UCYQdZUAw0iCXCmLFrekkUiA" rel="noopener noreferrer" target="_blank" title="facebook">
                                    <FaYoutube style={{fontSize:"18px", color: "#fff"}}/>
                                </Link>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Box className={footer.design}>
                        Design by Theme Developer | Distributed by Blogger Templates
                </Box>
            </Container>
        </Box>
    )
}
export default Footer