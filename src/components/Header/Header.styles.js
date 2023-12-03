import { makeStyles } from "@material-ui/core/styles";

export const useMenu = makeStyles(theme => ({
   menu: {
    backgroundColor: "#fff",
    height: "52px",
    boxShadow: "0 2px 7px 0 rgba(0,0,0,0.1)",
    lineHeight: "52px", 
    float: "left",
    width: "100%",
    fontFamily: "'Roboto Condensed', Arial, sans-serif",
   },
   list_menu: {
      display: "flex",
      flexDirection: 'row',
      alignItems: "stretch",
      padding: 0,
      height: "52px",
      fontWeight: "700",
      fontSize: "14px",
   },
   link: {
      position: "relative",
      display: "inline-block",
      width: "60px",
      height: "42px",
      left: "-16px",
    },
    menuItem: {
      padding: "0 14px",
      textAlign: "center",
      "&:hover ": {
        color: "#ca0000", 
        cursor: "pointer" },
      "&:hover $afterListItem": {
        display: "block",
      },
    },
    linkCommon: {
      textDecoration: 'none',
      color: '#333',
    },
    search: {
      backgroundColor: "rgba(155,155,155,0.1)",
      "&:hover ": {
        color: "#ca0000", 
        cursor: "pointer" },
    },
    main_search: {
      position: "relative",
      float: "right",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0)",
      overflow: "hidden",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: 0,
      animation: "showSearch .17s ease",
      search_form: {
         position: "relative",
         height: "34px",
         backgroundColor: "rgba(0,0,0,0)",
         flex: 1,
         border: 0,
       }
    },
    afterList: {
      // backgroundColor: "#fff",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      top: "14px",
    },
    afterListItem: {
      display: "none",
      backgroundColor: "#fff",
      width: "120%",
      marginBottom: "-3px",
      border: "1px solid black",
      color: "black",
      padding: "10px",
      paddingLeft: "5px"
    },
}));