import { makeStyles } from "@material-ui/styles";

export const use_Nav_Styles = makeStyles(
    {

        // -----Logo------

        navbar_bg_color: {
            position: "fixed",
            background: "#161829",
            color: "#fff",
            zIndex: 9,
        },

        navbar_margin: {
            marginTop: "43px",
            position: "fixed",
            background: "#161829",
            color: "#fff",
            zIndex: 9,
        },

        logo: {
            marginLeft: "auto",
        },

        // ------Tabs------

        tabs_container: {
            margin: "auto",
        },

        tab: {
            minWidth: 60,
            fontSize: 13,
            textTransform: 'capitalize',
            textDecoration: "none",
            marginRight: "1rem",
            color: "#fff",
            '&:hover': {
                color: "white",

            }
        },

        // -----right-nav content---

        right_nav_content: {
            display: "flex",
            width: "10%",
            justifyContent: 'space-between',
            marginRight: "auto",
        },

        right_nav_content_color: {

            color: "#fff",
        },

    }
)