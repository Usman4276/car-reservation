import { makeStyles } from "@material-ui/styles";

export const use_breadcrumb_style = makeStyles({

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
})