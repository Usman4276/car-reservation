import { makeStyles } from "@material-ui/styles";

export const use_Review_Slider_Style = makeStyles({

    container: {
        marginTop: "3rem",
    },

    review_text_title: {

        textTransform: "capitalize",
        marginBottom: "3rem",
    },

    review_text_body: {

        textTransform: "capitalize",
        marginBottom: "2rem",
    },

    carousel_caption: {

        color: '#000',
        left: '50%',
        transform: 'translate(-50%, -50%)',

    },

    // ---svg icon---
    svg_box_container: {

        display: "flex",
        justifyContent: "center",
    },

    left_svg_style: {

        marginTop: "1.3rem",
        marginRight: "1em",
    },

    right_svg_style: {

        marginTop: "1.3rem",
        marginLeft: "1em",
    },

    carousel_item: {

        height: "37rem",
    },

    // ---Star Ratings---
    rating_style: {

        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
    }
})