import { makeStyles } from "@material-ui/styles";
import { theme } from "../theme_style/Theme";

export const use_filter_style = makeStyles({

    filter_container: {

        backgroundColor: "#161829",
        margin: "auto",
        color: theme.palette.common.white,        
        height: "10rem",
        marginTop: -43,
        position: "relative",
        borderRadius: 5,
        padding: 23,
        textAlign: "center",
        // border: "solid",
        
        // -----media queries-----
        
        [theme.breakpoints.up('md')]:{
            width: "90%",
        },

        [theme.breakpoints.down('md')]:{
            width: "30%",
        },

    },

    box_container: {

        // border: "solid",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },

    component: {
        padding: 10,
        // border:"solid",
    },

    // ----address field style----

    typography_style: {
        textTransform: 'capitalize',
    },

    address_text_field: {
        width: "16rem",
        backgroundColor: "#fff",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        padding: 11,
    },

    // ----Date field style----

    date_field_style: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 11,
        width: "73%",
        margin: "auto",
        // marginBottom: 8,
    },


    // -----Button Style-----

    btn_style: {
        width: 180,
        background: "#EA001E",
        "&:hover": {
            background: "#D52B2B",
        },
        textTransform: 'capitalize',
    },

    arrow_customization: {
        marginLeft: 10,
        width: "13%",
    },

})