import { makeStyles } from "@material-ui/styles";

export const use_Account_Style = makeStyles({

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

    // ----account detail----

    account_container: {

        border: "solid #f6f6f6",
        borderRadius: "10px",
        padding: "1rem",
        textTransform: "capitalize",
        backgroundColor: "#f6f6f6",
        marginTop: "3rem",
        boxShadow: "0px 0px 5px 3px #cbcbcb",
        width: "22vw",
    },

    account_icons: {

        display: "flex",
        flexDirection: "column",
    },


    // ----Grid size 4 style----

    grid4_container: {

        display: "flex",
        justifyContent: "flex-end",
    },

    // ----Grid size 8 style----

    grid8_container: {

        display: "flex",
        flexDirection: "column",
        paddingLeft: "10rem",
    },

    // ----booking profile style----

    booking_prof_container: {

        textTransform: "capitalize",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
    },

    // ----booking history style----

    booking_history_container: {

        textTransform: "capitalize",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        marginLeft: "6rem",
        marginBottom: "7rem",     
    },

})