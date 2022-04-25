import { makeStyles } from "@material-ui/styles";

export const use_featured_vehicles_styles = makeStyles({

    container: {

        textAlign: "center",
        padding: 30,
        marginTop: "10rem",
        marginBottom: "3rem",
    },

    left_svg_style: {

        marginTop: "1.3rem",
        marginRight: "1rem",
    },

    right_svg_style: {

        marginTop: "1.3rem",
        marginLeft: "1rem",
    },

    text_style: {
        marginTop: "2rem",
    },

    // -----tabs-----

    tab_container: {
        // border: "solid",
        display: 'flex',
        justifyContent: "center",
        marginBottom: "3rem",
    },

    tab_item: {
        fontWeight: "bold",
        textTransform: "capitalize",
        minWidth: "4rem",
    },

    // ----Card Container----

    card_container: {

        textAlign: "center",
        width: "90%",
        margin: "auto",
    },




    card_style: {

        width: "100%",
        margin: "auto",
        display: "inline-flex",
        padding: "1rem",
    },

    // -----Button Styles-----

    btn_container: {
        // border: "solid",
        display: "flex",
        justifyContent: "center",
    },

    btn_style: {

        textTransform: "capitalize",
        // marginRight: -3,
        fontSize: "11px",
        fontWeight: "bold",
    },

    price_btn_style: {
        position: "relative",
        bottom: "3rem",
        right: "7rem",
        background: "blue",
        color: "white",
        cursor: "default !important",
        textTransform: "capitalize",
        zIndex: 1,
        '&:hover': {
            background: "blue",
            color: "white",
        }
    },

    btn_width: {
        width: 250,
        height: "3rem",
        background: "#EA001E",
        "&:hover": {
            background: "#D52B2B",
        },
        textTransform: "capitalize",
    },

    btn_margins: {
        display: "flex",
        justifyContent: "center",
        marginTop: "4rem",
    },

    arrow_customization: {
        marginLeft: 10,
        width: "13%",
    },

})