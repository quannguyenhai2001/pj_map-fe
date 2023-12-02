import { Box } from "@mui/material";
import "./Header.styles.scss"

const Header = ({ param }) => {

    return (
        <Box mb="10px">
            <Box>
                {param}
            </Box> 
        </Box>
    );
};