import { makeStyles } from "@material-ui/core/styles";

export const useContent = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: "row",
        marginTop: "25px",
        zIndex: "-1",
        justifyContent: "space-between",
    },
    content: {
        width: "69%",
        backgroundColor: "#fff"
    },
    titleContent:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        position: "relative",
        float: "left",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 20px",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        backgroundColor: "#ca0000",
        padding: "2px 6px",
        transition: "opacity .17s ease",
        fontSize: "12px",
        fontWeight: "400",
    },
    listContent: {
        position: "relative",
        float: "left",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
    },
    sidebar: {
        width: "25%",
    }
}))