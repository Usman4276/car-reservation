import { makeStyles } from "@material-ui/styles";

export const use_WhyUs_style = makeStyles({

    main_container: {
        
        width: "100%",
        padding: "6rem",
    },

    text_container: {
        // border: "solid",
        display: "flex",
        justifyContent: "center",
        // marginBottom:"5rem",
    },

    left_svg_style: {

        marginTop: "1.3rem",
        marginRight: "1rem",

    },

    right_svg_style: {

        marginTop: "1.3rem",
        marginLeft: "1rem",
    },

    // ----SVG's----
    
    image: {
        // border:"solid",
        textAlign: "center",
        marginBottom: "2rem",
    },

    h6_heading: {
        textTransform: "capitalize",
        textAlign: "center",
    },

    body2_heading: {
        textTransform: "capitalize",
        textAlign: "center",
    },

    box_container: {
        // border:"solid",
        marginTop: "5rem",
        justifyContent: "center",
        display: "flex",
    },

    box_container_item: {
        // border:"solid",
        padding: "2rem",
    },

    // main_box_container: {
    //     // border:"solid",
    // },


    // ---------Carousel Style-----------

    carousel_container: {

        width: "70%",
        margin: "auto",
        position: "relative",
        top: "10rem",
    },

    btn_style: {

        // border: "solid",
        marginRight: "25rem",
        backgroundColor:"blue",
        '&:hover':{
            backgroundColor:"#444EDA",
        }
    },

    btn_text_style: {
        marginBottom: "-1rem",
    },
})