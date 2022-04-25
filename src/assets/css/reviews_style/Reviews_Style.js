import Image from '../../images/Bg.png'

import { makeStyles } from "@material-ui/core";

export const use_review_style = makeStyles({

    // ---Banner section---

    img_style: {

        marginTop: "107px",
        position: "relative",
    },

    text_styles: {

        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textTransform: "capitalize",
        color: "white",
        fontSize: "30px",
    },

    // ----Breadcrumbs section----

    grid_12: {

        backgroundColor: "#F7F7F7",
        padding: "7px",
    },

    breadcrumb: {

        marginLeft: "13rem",
        fontSize: "12px"
    },

    breadcrumb_links_one: {

        textDecoration: "none",
        textTransform: "capitalize",
        color: "#757575",

    },

    breadcrumb_links_two: {

        color: "#757575",
        textDecoration: "none",
        '&:hover': {
            textDecoration: "none",
            cursor: "pointer",
        }
    },

    // ----form title----

    left_svg_style: {

        marginTop: "1.3rem",
        marginRight: "1rem",
    },

    right_svg_style: {

        marginTop: "1.3rem",
        marginLeft: "1rem",
    },

    // ---form fields---

    box_one: {

        padding: "10px",
        width: "27vw",
    },

    box_one_p1: {

        padding: "10px",
        width: "40vw",
    },

    text_style: {

        width: "100%",
        background: "white",
        borderRadius: "5px",
    },

    text_style1: {

        width: "100%",
        background: "white",
        borderRadius: "5px",
    },

    // ---Button---

    btn_style: {
        textAlign: "center !important",
        marginTop: "4rem !important",
        marginBottom: "6rem !important",
    },

    btn_width: {

        boxShadow: "0px -3px 3px -1px #ff0000a1 !important",
        width: 223,
        background: "red !important",
        "&:hover": {
            background: "#D52B2B !important",
        },
        textTransform: "capitalize !important",
    },

    arrow_customization: {
        marginLeft: 10,
        width: "13%",
    },

    // ----feedback----
    image_container: {

        backgroundImage: `url(${Image})`,
        height: "100vh",
        '&::after': {
            border: "solid",
        }
    },

    account_container: {

        border: "solid #f6f6f6",
        borderRadius: "10px",
        padding: "1rem",
        textTransform: "capitalize",
        backgroundColor: "#f6f6f6",
        boxShadow: "0px 0px 5px 3px #cbcbcb",
        width: "22vw",
    },

    account_icons: {

        display: "flex",
        flexDirection: "column",
    },

})