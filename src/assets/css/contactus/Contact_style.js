import { makeStyles } from "@material-ui/styles";

export const use_Contact_Style = makeStyles({
    
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
        fontSize: "25px"
    },

    main_container: {
        marginTop: "2rem",
        padding: "4rem",
    },

    img_container: {
        margin: "auto",
        width: "56%",
    },


    titles: {
        textTransform: "capitalize",
        fontWeight: "bold",
        padding: "1rem",
    },

    margin_five: {
        padding: "6px",
        marginLeft: "1rem",
        textTransform: "capitalize",

    },

    margin_six: {
        marginTop: "1rem",
    },

    margin_seven: {

        padding: "6px",
        marginLeft: "1rem",
    },
// ---
    body_text_styles: {
        textTransform: "capitalize",
        padding: "6px",
        textAlign: "justify",
        fontSize: "13px",
    },

    left_svg_style: {

        marginTop: "1.3rem",
        marginRight: "1rem",
    },

    right_svg_style: {

        marginTop: "1.3rem",
        marginLeft: "1rem",
    },

    // ---form---

    main_form_container: {
        width: "61%",
        margin: "auto",
    },

    box_one: {

        padding: "10px",
    },

    text_style: {

        width: "100%",
    },

    text_style1: {

        width: "100%",
    },

    btn_style: {
        textAlign: "center",
        marginTop: "4rem",
        marginBottom: "10rem",
    },

    btn_width: {
        width: 250,
        background: "#EA001E",
        "&:hover": {
            background: "#D52B2B",
        },
        textTransform: "capitalize",
    },

    arrow_customization: {
        marginLeft: 10,
        width: "13%",
    },
})