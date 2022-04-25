import { makeStyles } from "@material-ui/styles";

export const use_Subscribe_Style = makeStyles({

    // ----Blog Text----

    main_container: {

        width: "80%",
        margin: "auto",
    },

    blog_main_box_container: {

        marginTop: "13rem",
        padding: "2rem",

        height: "54%"
    },

    blog_box_container: {

        padding: "1rem",
    },

    blog_title: {

        textTransform: "capitalize",
        fontWeight: "bold",
    },

    blog_img: {

        padding: "1rem",
        width: "47%",
        display: "inline-flex",
        flexDirection: "column",
    },

    blog_body_text: {

        marginTop: "1rem",
        fontWeight: "bold",
    },


    // ----Subscribe style----

    subscribe_main_box_container: {

        marginTop: "13rem",
        padding: "2rem",

        height: "54%"
    },

    subscribe_body_text: {

        marginTop: "1rem",

    },

    subscribe_textfield_button_container: {

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "1rem",
    },

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

    // ----hr style---

    margins: {

        marginTop: "7rem",
    }
})