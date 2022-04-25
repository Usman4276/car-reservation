import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import { Mini_navbar } from '../components/navbar/Mini-navbar';
import { Navbar } from '../components/navbar/Navbar';
import { use_Contact_Style } from '../assets/css/contactus/Contact_style';
import { Sub_Footer } from '../components/footer/Sub_Footer';
import { Main_Footer } from '../components/footer/Main_Footer';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { Link } from 'gatsby';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { window } from 'browser-monads';


const Contact = () => {

    // ---Breadcrumbs logic

    let str = '';
    str = window.location.pathname;
    str = str.substr(1, 7);

    const classes = use_Contact_Style();
    return (
        <>
            {/* ---Header--- */}

            <Mini_navbar myValue="true" />
            <Navbar />

            {/* ---Body content--- */}

            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.img_style}>
                        <StaticImage
                            src="../assets/images/Short Banner 6.png"
                            alt="contact banner"
                            placeholder="blurred"
                        />
                        <Typography className={classes.text_styles}>contact</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* ----BreadCrumbs--- */}

            <Grid container>
                <Grid item xs={12} style={{ backgroundColor: "#F7F7F7", padding: "7px" }}>
                    <Breadcrumbs style={{
                        marginLeft: "13rem",
                        fontSize: "12px"
                    }}>
                        <Link to="/" style={{ textDecoration: "none", textTransform: "capitalize", color: "#757575" }}>home</Link>
                        <Link style={{ color: "#757575" }}>{str}</Link>
                    </Breadcrumbs>
                </Grid>
            </Grid>

            {/* ---Body content--- */}

            <Grid container className={classes.main_container}>
                <Grid item xs={12} md={6}>
                    <Box className={classes.img_container}>
                        <StaticImage
                            src="../assets/images/Contact.png"
                            alt="contact img"
                            placeholder="blurred"

                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.titles}>
                        <Typography variant="h5">
                            main office:
                        </Typography>
                    </Box>
                    <Box className={classes.margin_five}>
                        <Typography>
                            <LocationOnIcon
                                fontSize="small"
                            />
                            main office address:
                        </Typography>

                        <Typography variant="body1" className={classes.margin_six}>
                            unit 9, manor industrial estate, lower wash lane, warrington, WA4
                        </Typography>
                    </Box>
                    <Box className={classes.margin_seven}>
                        <Typography variant="body1">
                            <WatchLaterIcon
                                fontSize="small"
                            /> 8:00am-9:30pm
                        </Typography>
                    </Box>

                    <Box className={classes.margin_seven}>
                        <MailIcon
                            fontSize="small"
                        />
                        rotorseml@eml.fr
                    </Box>
                    <Box className={classes.margin_seven}>
                        <PhoneEnabledIcon
                            fontSize="small"
                        />
                        01967 411232
                    </Box>
                </Grid>
            </Grid>

            {/* ---Form--- */}

            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ textTransform: "capitalize", textAlign: "center", marginTop: "6rem", marginBottom: "2rem" }}>
                        <StaticImage
                            src="../assets/images/SVG_s/pointer.svg"
                            alt="pointer image"
                            placeholder="blurred"
                            className={classes.left_svg_style}
                        />
                        send us a message
                        <StaticImage
                            src="../../assets/images/SVG_s/pointer.svg"
                            alt="pointer image"
                            placeholder="blurred"
                            className={classes.right_svg_style}
                        />
                    </Typography>
                </Grid>
            </Grid>

            <Grid container className={classes.main_form_container}>
                <Grid item xs={12} md={6}>
                    <Box className={classes.box_one}>
                        <TextField type="text" variant="outlined" placeholder="First Name" className={classes.text_style} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.box_one}>
                        <TextField type="text" variant="outlined" placeholder="Last Name" className={classes.text_style} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.box_one}>
                        <TextField type="text" variant="outlined" placeholder="Email" className={classes.text_style} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.box_one}>
                        <TextField type="number" variant="outlined" placeholder="Phone Number" className={classes.text_style} />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.box_one}>
                        <TextField type="text" variant="outlined" placeholder="Leave your message" className={classes.text_style1} />
                    </Box>
                </Grid>
                <Grid item xs={12} className={classes.btn_style}>
                    <Button variant="contained" color="secondary" className={classes.btn_width} >Send a Message <StaticImage
                        src="../../assets/images/Path.png"
                        alt="arrow"
                        placeholder="blurred"
                        className={classes.arrow_customization}
                    /></Button>
                </Grid>
            </Grid>
            <Sub_Footer />
            <Main_Footer />
        </>
    )
}

export default Contact;