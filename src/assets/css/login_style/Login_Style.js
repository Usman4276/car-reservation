import { makeStyles } from "@material-ui/core";

export const use_login_style = makeStyles({

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

    // ----login form----

    main_grid_container: {

        marginBottom: "6rem",
    },

    grid_12_login: {

        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
    },

    login_main_box: {

        width: "67%",
        display: "flex",
        padding: "1rem",
        background: "rgb(242, 242, 242)", boxShadow: "rgb(242 242 242) 0px 0px 5px 0px",
        boxShadow: "0px 0px 5px 3px #00000045",
        borderRadius: "10px",
    },

    image_grid_6: {

        display: "flex",
        justifyContent: "center",
        background: "rgb(242, 242, 242)",
    },

    form_grid_6_main_box: {

        display: "flex",
        justifyContent: "space-between", paddingLeft: "1rem",
        paddingRight: "1rem"
    },

    // ---Heading---

    typo1: {

        fontSize: "31px",
        fontWeight: "bold",
    },

    typo1_text: {

        fontSize: "13px",
    },

    loging_form_box1: {

        padding: "1rem",
        textTransform: "capitalize",
    },

    typo2: {

        fontSize: "12px",
        textDecoration: "none",
    },

    typo2_link1: {

        textDecoration: "none"
    },

    // ----Text fields---

    textfield_box1: {

        marginBottom: "14px",
    },

    textfield_box1_field1: {

        backgroundColor: "white", width: "100%", marginBottom: "13px !important",
    },

    textfield_box2_field1: {

        backgroundColor: "white", width: "100%"
    },

    // ---Button---

    btn_box: {

        marginTop: "1rem",
    },

    btn1: {

        backgroundColor: "red !important",
        width: "100%",
        boxShadow: "0px -3px 3px -2px rgb(0 0 0 / 87%) !important",
        color: "white !important",
        textTransform: "capitalize !important",
        '&:hover': {
            backgroundColor: "#ff0000bf !important",
        }
    },


    // ---password reset---

    pw_box: {

        textTransform: "capitalize",
        fontSize: "12px",
        marginTop: "1rem",
        padding: "1rem",
    },

    // ---checkbox---

    checkbox_box: {

        display: "flex"
    },

    checkbox_typo1: {

        display: "flex",
        alignItems: "center",
        fontSize: "12px",
        color: "#6c757d",
    },

    // ---privacy policy---

    pv_box: {

        fontSize: "11px",
        marginLeft: "9rem",
    },

    // ---Registeration form---

    main_container: {

        marginTop: "5rem",
        width: "66%",
        margin: "auto",
        marginBottom: "7rem",
        background: "rgb(242, 242, 242)",
        boxShadow: "0px 0px 5px 3px #00000045",
        borderRadius: "10px",
    },

    reg_grid_12: {

        display: "flex",
        justifyContent: "center",
    },

    reg_box1: {

        boxShadow: "0px 0px 5px 0px #f2f2f2", borderRadius: "10px",
        width: "66%",
    },

    reg_typo1: {

        textTransform: "capitalize",
        textAlign: "center",
        marginTop: "4rem",
        marginBottom: "2rem",
    },

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

    text_style2: {

        border: "solid #00000021",
        borderRadius: "5px",
        marginTop: "-5px"
    },

    text_style3: {

        textAlign: "justify",
        fontSize: "11px",
        color: "gray",
        marginTop: "-2px",
    },

    // ---Button---

    btn_style: {
        textAlign: "center",    
        marginBottom: "3rem",
        marginLeft: "11px",
        marginBottom: "3rem",
    },

    btn_width: {

        width: "348px !important",
        backgroundColor: "red !important",
        color: "white !important",
        boxShadow: "0px -3px 3px -2px rgb(0 0 0 / 87%) !important",
        '&:hover': {
            backgroundColor: "#ff0000bf !important",
        },
        textTransform: "capitalize !important",
    },

    arrow_customization: {
        marginLeft: 10,
        width: "13%",
    },
})