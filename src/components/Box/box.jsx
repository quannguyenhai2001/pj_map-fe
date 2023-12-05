import { Box, Typography } from "@mui/material";
import { useBox } from "./box.styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from "@mui/material/Link";


const BoxContent = ({title, content}) => {
    const box = useBox()

    return (
        <Box className={box.container}>
            <Box className={box.title}>
                <Typography className={box.para}>{title}</Typography>
            </Box>
            <Box className={box.content}>
                {content}
            </Box>
        </Box>
    )
}

export default BoxContent;