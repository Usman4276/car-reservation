import React, { useState } from 'react';
import { Mini_navbar } from '../components/navbar/Mini-navbar';
import { Navbar } from '../components/navbar/Navbar';
import { Grid, Box, Typography } from '@material-ui/core';
import { use_About_Style } from '../assets/css/all_aboutus_page_styles/About_Style';
import { StaticImage } from 'gatsby-plugin-image';
import { WhyUs } from '../components/home/WhyUs';
import { Review_Slider } from '../components/home/Review_Slider';
import { Sub_Footer } from '../components/footer/Sub_Footer';
import { Main_Footer } from '../components/footer/Main_Footer';
import { Countup } from '../components/aboutus/Count_up';
import MyBreadcrumbs from '../components/breadcrumbs/MyBreadcrumbs';
import { Link } from 'gatsby';
import VisibilitySensor from "react-visibility-sensor";

const About = () => {
    const classes = use_About_Style();

    const [state, setstate] = useState('');

    // const checkScroll = () => {
    //     console.log(window.scrollY);

    // }

    // window.addEventListener('scroll', checkScroll);

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
                            src="../assets/images/Short Banner 9.png"
                            alt="banner img"
                            placeholder="blurred"
                        />
                        <Typography className={classes.text_styles}>about</Typography>
                    </Box>
                </Grid>

                {/* ----BreadCrumbs--- */}

                <MyBreadcrumbs value={5} />

                <WhyUs myValue="true" />
                <Countup />
                {/* <VisibilitySensor>
                </VisibilitySensor> */}
                <Review_Slider />
                <Sub_Footer />
                <Main_Footer />
            </Grid>
        </>
    )
}
export default About;
