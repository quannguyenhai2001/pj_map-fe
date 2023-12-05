import { makeStyles } from "@material-ui/core/styles";

export const useFooter = makeStyles(theme => ({
    container: {
        position: "relative",
        float: "left",
        width: "100%",
        backgroundColor: "black",
        color: "#afafaf",
        zIndex: 2,
        boxShadow: "0 -1px 2px rgba(0,0,0,0.025)",
    },
    headFooter: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        float: "left",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "30px 0",
        margin: 0,
    },
    ctFooter: {
        display: "flex",
        flexDirection: "row",
        width: "calc(100% - 345px)",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 0,
    },
    scFooter: {
        width: "320px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: 0,
    },
    design: {
        position: "relative",
        float: "left",
        width: "100%",
        height: "58px",
        color: "#f6f6f6",
        display: "flex",
        alignItems: "center",
    }
}))