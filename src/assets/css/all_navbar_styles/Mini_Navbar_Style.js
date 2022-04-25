import { makeStyles } from "@material-ui/styles";


export const use_mini_nav_customization = makeStyles({

    mini_nav_customization: {

        position: "absolute",
        fontSize: 13,
        minHeight: 30,
        zIndex: 10,
        width: "100%",
    },

    box_container: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },

    mail_phone_container_customization: {

        display: "inline-flex",
        margin: "auto",
        width: "41%",

    },

    mail_part_customization: {

        display: "flex",
        color: "#fff",
        width: "100%",

    },

    icon_style: {
        marginRight: 5,
        height: 25,
    },

    phone_part_customization: {

        display: "flex",
        color: "#fff",
        width: "100%",

    },

    // -----Social links styles----

    social_links_customization: {

        display: "flex",
        // fill:"#fff",
        width: "15%",
        justifyContent: "space-between",
        margin: "auto",
    },

    social_link_color: {

        color: "#fff",
    },
})