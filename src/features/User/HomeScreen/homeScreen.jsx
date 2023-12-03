import React from "react"
import { Box } from "@mui/material";
import { useStyle } from "./HomeScreen.styles";
import Menu from "components/Header/Header";
import Content from "components/Content/content";

const HomeScreen = () => {
    const style = useStyle();
    return(
    <Box sx={{display: "flex", flexDirection:"column"}}>
            <Menu />
            <Content />
    </Box>    
    )
}
export default HomeScreen