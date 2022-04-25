import { makeStyles } from "@material-ui/styles";

export const use_Sub_Footer_Style = makeStyles({

    // ----First Section ----

    main_container: {
        backgroundColor: "#F7F7F7",
    },

    sub_container: {

        padding: "3rem",
    },

    links_style: {
        textDecoration: "none",
        textTransform: "capitalize",
        color: "#000",
        '&:hover': {
            color: "#919191 ",
        },
        padding: "1rem",
    },

    img_style: {
        padding: "1rem",
    },

    para: {
        fontSize: "13px",
        textAlign: "justify",
    },

    search_textfield: {
        backgroundColor: "#fff",
    },

    margin_one: {

        marginTop: "1rem",
        padding: "6px",
        fontSize: "13px",
    },

    margin_two: {

        padding: "6px",
        fontSize: "13px",
        marginBottom:"1rem",
    },

    margin_four:{
        padding: "6px",
    },

    // ----Second Section----

    titles: {
        textTransform: "capitalize",
        fontWeight: "bold",
        padding: "1rem",
    },

    body_text_styles: {
        textTransform: "capitalize",
        padding: "6px",
        textAlign: "justify",
        fontSize: "13px",
    },

    

    margin_three: {

        padding: "6px",
        fontSize: "13px",
        marginBottom:"1rem",
    },

    

    margin_five:{
        padding: "6px",
        marginLeft:"1rem",
        textTransform:"capitalize",
        
    },

    margin_six:{
        marginTop:"1rem",
    },

    margin_seven:{

        padding: "6px",
        marginLeft:"1rem",
    },

    margin_eight:{

        padding: "6px",
        marginLeft:"1rem",
    },   
})