import { makeStyles } from "@material-ui/core/styles";

export const useBox = makeStyles(theme => ({
    container: {
        position: "relative",
        float: "left",
        width: "100%",
        backgroundColor: "#ffffff",
        margin: "0 0 25px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.025)",
    },
    title: {
        backgroundColor: "#000000",
        position: "relative",
        float: "left",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 20px",
        borderBottom: "1px solid rgba(155,155,155,0.1)",
    },
    para: {
        display: "flex",
        fontFamily: "'Roboto Condensed', Arial, sans-serif",
        fontSize: "14px",
        color: "#fff",
        fontWeight: "700",
        margin: "0",
    },
    content: {
        position: "relative",
        float: "left",
        width: "100%",
        padding: "20px",
        margin: 0,
        "&:hover" : {
            color: "#ca0000", 
            cursor: "pointer"
        }
    }
}))