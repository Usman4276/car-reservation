import { makeStyles } from "@material-ui/styles";

export const use_blog_style = makeStyles({

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

    // ----main heading----

    main_heading: {
 
        marginTop: "5rem",
    },

    box_1: {

        display: "flex",
        justifyContent: "center",
    },

    typo_1: {

        width: "50vw",
    },

    // ----sub heading----

    box_2: {

        display: "flex",
        justifyContent: "center",
    },

    typo_2: {

        width: "50vw",
        marginTop: "1rem",
        fontWeight: "bold",
    },

    body_text1: {

        width: "50vw",
        marginTop: "1rem",
    },

    body_text2: {

        width: "50vw",
        marginTop: "2rem",
    },

    // ----quotation section----

    quote_container: {

        display: "flex",
        justifyContent: "center",
    },

    quote_body: {

        textAlign: "center",       
        width: '50%',
    },

    // ----form----
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

        textAlign: "center",
        marginTop: "3rem",
        marginBottom: "10rem",
    },

    btn_width: {

        width: 250,
        backgroundColor: "red",
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