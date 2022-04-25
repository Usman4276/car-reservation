import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import { use_WhyUs_style } from '../../assets/css/all_home_page_styles/WhyUs_Style';
import { Carousel } from 'react-bootstrap';
import "../../assets/css/why_us_carousel_style/why_us_carousel.css"


export const WhyUs = (props) => {
    const classes = use_WhyUs_style();

    return (
        <>
            <Grid container className={classes.main_container} style={props.myValue ? { backgroundColor: "#fff", color: "black", marginTop: "2rem", } : { backgroundColor: "#161829", color: "white", marginTop: "10rem" }}>
                <Grid item xs={12}>
                    <Box className={classes.text_container}>
                        <Typography variant="h4">
                            <StaticImage
                                src="../../assets/images/SVG_s/pointer.svg"
                                alt="pointer image"
                                placeholder="blurred"
                                className={classes.left_svg_style}
                            />
                            Why Us
                            <StaticImage
                                src="../../assets/images/SVG_s/pointer.svg"
                                alt="pointer image"
                                placeholder="blurred"
                                className={classes.right_svg_style}
                            />
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <Box className={classes.box_container}>
                            <Box className={classes.box_container_item}>
                                <Box className={classes.image}>
                                    <StaticImage
                                        src="../../assets/images/shield-alt.png"
                                        placeholder="blurred"
                                        alt="sheild image"
                                    />
                                </Box>
                                <Box className={classes.h6_heading}>
                                    <Typography variant="h6">
                                        secure payment <br /> guarantee
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" className={classes.body2_heading}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque voluptate cum architecto
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.main_box_container}>
                        <Box className={classes.box_container}>
                            <Box className={classes.box_container_item}>
                                <Box className={classes.image}>
                                    <StaticImage
                                        src="../../assets/images/headset.png"
                                        placeholder="blurred"
                                        alt="sheild image"
                                    />
                                </Box>
                                <Box className={classes.h6_heading}>
                                    <Typography variant="h6">
                                        help center & <br /> support 24/7 guarantee
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" className={classes.body2_heading}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque voluptate cum architecto
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.main_box_container}>
                        <Box className={classes.box_container}>
                            <Box className={classes.box_container_item}>
                                <Box className={classes.image}>
                                    <StaticImage
                                        src="../../assets/images/shield-alt.png"
                                        placeholder="blurred"
                                        alt="sheild image"
                                    />
                                </Box>
                                <Box className={classes.h6_heading}>
                                    <Typography variant="h6">
                                        booking any class <br /> vehicle
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" className={classes.body2_heading}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque voluptate cum architecto
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.main_box_container}>
                        <Box className={classes.box_container}>
                            <Box className={classes.box_container_item}>
                                <Box className={classes.image}>
                                    <StaticImage
                                        src="../../assets/images/briefcase.png"
                                        placeholder="blurred"
                                        alt="sheild image"
                                    />
                                </Box>
                                <Box className={classes.h6_heading}>
                                    <Typography variant="h6">
                                        corporate and <br /> buisness services
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" className={classes.body2_heading}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque voluptate cum architecto
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.main_box_container}>
                        <Box className={classes.box_container}>
                            <Box className={classes.box_container_item}>
                                <Box className={classes.image}>
                                    <StaticImage
                                        src="../../assets/images/user-plus.png"
                                        placeholder="blurred"
                                        alt="sheild image"
                                    />
                                </Box>
                                <Box className={classes.h6_heading}>
                                    <Typography variant="h6">
                                        car sharing <br /> options
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" className={classes.body2_heading}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque voluptate cum architecto
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.main_box_container}>
                        <Box className={classes.box_container}>
                            <Box className={classes.box_container_item}>
                                <Box className={classes.image}>
                                    <StaticImage
                                        src="../../assets/images/gem.png"
                                        placeholder="blurred"
                                        alt="sheild image"
                                    />
                                </Box>
                                <Box className={classes.h6_heading}>
                                    <Typography variant="h6">
                                        limousine and <br />chauffeur hire
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" className={classes.body2_heading}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque voluptate cum architecto
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* ------------Carousel------------- */}

                {props.myValue ? '' : <Grid item xs={12}>
                    <Box className={classes.carousel_container}>
                        <Carousel interval={2000} indicators={false}>
                            <Carousel.Item>
                                <StaticImage
                                    src="../../assets/images/sports (1).png"
                                    alt="image"
                                    placeholder="blurred"

                                />
                                <Carousel.Caption>

                                    <Button variant="contained" color="secondary" className={classes.btn_style} >$/Day </Button>

                                    <h1 className={classes.btn_text_style}>Lamborghini</h1>
                                </Carousel.Caption>

                            </Carousel.Item>
                            <Carousel.Item>
                                <StaticImage
                                    src="../../assets/images/sports (2).png"
                                    alt="image"
                                    placeholder="blurred"

                                />
                                <Carousel.Caption>

                                    <Button variant="contained" color="secondary" className={classes.btn_style} >$/Day </Button>

                                    <h1 className={classes.btn_text_style}>Lamborghini</h1>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <StaticImage
                                    src="../../assets/images/sports (3).png"
                                    alt="image"
                                    placeholder="blurred"

                                />
                                <Carousel.Caption>

                                    <Button variant="contained" color="secondary" className={classes.btn_style} >$/Day </Button>

                                    <h1 className={classes.btn_text_style}>Lamborghini</h1>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Box>
                </Grid>}

            </Grid>
        </>
    )
}