import { makeStyles } from "@material-ui/styles";


export const use_carousel_style = makeStyles({


    set_index: {

        position: "relative",

    },

    btn_width: {
        width: 250,
        background: "#EA001E",
        "&:hover": {
            background: "#D52B2B",
        },
    },
    img_width_height: {
        width: "100%",
        height: "100vh",
    },
    content_position: {
        marginBottom: "140px",
    },
    arrow_customization: {
        marginLeft: 10,
        width: "13%",
    },

    // font_style: {
    //     ...theme.typography.primary,
    // },
})