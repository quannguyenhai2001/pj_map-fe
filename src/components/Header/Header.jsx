import { Box, Container, Typography } from "@mui/material";
import { useMenu } from "./Header.styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const menu = useMenu()
    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
      };
    const navigate = useNavigate();
    return(
    <Box sx={{zIndex:"1"}}>
        <Box sx={{backgroundColor: "#ca0000", color:"#fff"}}>
        <Container maxWidth="lg">
            <Typography sx={{height:"28px", lineHeight:"28px", fontSize: "12px", fontFamily: "'Roboto', Arial, sans-serif" }}>CHÀO MỪNG BẠN ĐẾN VỚI HÀNH TRÌNH KHÁM PHÁ DI SẢN VIỆT NAM</Typography>
        </Container>
        </Box>  
    <Box className={menu.menu}>
        <Container maxWidth="lg">
            <Box>
                <List  className={menu.list_menu}>
                    <ListItem sx={{width: "60px"}}>
                        <a href="/" className={menu.link}>
                            <img alt="KHÔNG GIAN ẢO VỀ CÁC DI SẢN VIỆT NAM " data-height="42" data-width="60" src="https://blogger.googleusercontent.com/img/a/AVvXsEjz78L_CUZOh1KK7FeADxkTynIZj6nzCU50_vGZRSQWF78v5_1n1AztNnpFB4AkbCW6jkBk5r6Zmuvjr2Cz7GI0jDBYpmU0H4VMCdOiKIToO9iFKbIZJX4wr_30f1V-eXUgZ5DDJCfMbrG87Ioxf5wT9xEaia7I8Aord9S5u_3TiRRy25sgMIGL-fZgrVzo=s60" title="KHÔNG GIAN ẢO VỀ CÁC DI SẢN VIỆT NAM " /> 
                        </a>
                    </ListItem>
                    <ListItem sx={{marginLeft: "14px", width: "59%"}} className={menu.menuItem}>
                        <ListItemText primary={<a style={{color:"black"}} href="/" >TRANG CHỦ</a>} />    
                    </ListItem>
                    <ListItem sx={{width: "135%", display: "flex",flexDirection: "column", padding: 0}} className={menu.menuItem}>
                        <Box sx={{display: "flex",flexDirection: "row", position: "relative", top: "13px"}}><ListItemText primary="DI SẢN TRONG DẠY PHỔ THÔNG" /> 
                            <SlArrowDown style={{ fontSize: "7px" , position: "relative", left: "3px", marginTop: "10px"}}/>
                        </Box> 
                        <ListItem className={menu.afterList}>
                            <ListItemText className={menu.afterListItem} primary="Giá trị di sản" />    
                            <ListItemText className={menu.afterListItem} primary="Giới thiệu di sản" />  
                            <ListItemText className={menu.afterListItem} primary="Danh mục các di sản" />  
                        </ListItem>
                    </ListItem>
                    <ListItem sx={{width: "110%", display: "flex",flexDirection: "column", padding: 0}} className={menu.menuItem}>
                        <Box sx={{display: "flex",flexDirection: "row", position: "relative", top: "13px"}}>
                            <ListItemText primary="BẢN ĐỒ DI SẢN VIỆT NAM" /> <SlArrowDown style={{ fontSize: "7px", position: "relative", left: "2px", marginTop: "10px"}}/>
                        </Box>
                        <ListItem className={menu.afterList}>
                            <ListItemText button onClick={() => navigate('/user/hanoi')} className={menu.afterListItem} primary="Bản đồ hệ thống di tích Lịch sử trên địa bàn thành phố Hà Nội( Song ngữ Việt - Anh)" />    
                            <ListItemText button onClick={() => navigate('/user/quangtri')} className={menu.afterListItem} primary="Bản đồ hệ thống di tích lịch sử tỉnh Quảng Trị ( Song ngữ Việt - Anh) " />  
                        </ListItem>
                    </ListItem>
                    <ListItem sx={{width: "105%", display: "flex",flexDirection: "column", padding: 0}} className={menu.menuItem}>
                        <Box sx={{display: "flex",flexDirection: "row", position: "relative", top: "13px"}}>
                            <ListItemText primary="TRẢI NGHIỆM ẢO DI SẢN" /> <SlArrowDown style={{ fontSize: "7px", position: "relative", left: "2px", marginTop: "10px"}}/>
                        </Box>
                        <ListItem className={menu.afterList}>
                            <ListItemText className={menu.afterListItem} primary={<Link style={{color:"black"}} to="https://www.artsteps.com/view/653e9ff35dd120662ebddf31" target="blank">Chinh phục Văn Miếu Quốc Tử Giám ( Virtual museum of Quoc Tu Giam relics)</Link>}  /> 
                            <ListItemText className={menu.afterListItem} primary={<Link style={{color:"black"}} to="https://www.artsteps.com/view/654e08b66f470432ab31d4ba" target="blank">Giải mã Hoàng Thành Thăng Long</Link>} />  
                            <ListItemText className={menu.afterListItem} primary="Khám phá Chùa Thầy " />  
                            <ListItemText className={menu.afterListItem} primary="Đình Chèm và lễ hội Đình Chèm " />  
                        </ListItem>
                    </ListItem>
                    <ListItem sx={{width: "160%"}} className={menu.menuItem}>
                        {/* <a href="https://www.google.com/" target="blank" className={menu.linkCommon}> */}
                            <ListItemText primary="KHÔNG GIAN DOANH NHÂN VIỆT NAM" />
                        {/* </a>  */}
                    </ListItem>
                    <ListItem sx={{width: "35%", padding: "0", marginLeft: "14px", justifyContent: "center", alignItems: "center"}} className={menu.search} onClick={toggleSearch}>
                        <FaSearch />
                    </ListItem>
                    {isSearchVisible && (
                        <Box id="main-search-wrap">
                            <Box className={menu.main_search}>
                              
                            </Box>
                        </Box>
      )}
                </List>
            </Box>
        </Container>
    </Box>  
</Box>    
)
}

export default Menu;