import React from 'react';
import { Carousel } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import { Button, Grid } from '@material-ui/core';
import { use_carousel_style } from '../../assets/css/all_home_page_styles/Carousel_Style';
import "../../assets/css/hero_carousel_style/carousel_indicators.css"

export const Image_Slider = () => {

    const classes = use_carousel_style();

    return (
        <>

            <Grid container>
                <Grid item xs={12}>
                    <Carousel className={classes.set_index} interval={2000} nextIcon={false} prevIcon={false} indicators={true}>
                        <Carousel.Item>
                            <StaticImage
                                src="../../assets/images/Slide 3.png"
                                alt="image"
                                placeholder="blurred"
                                className={classes.img_width_height}
                            />
                            <Carousel.Caption className={classes.content_position}>

                                <h1 >Lamborghini</h1>
                                <h1>Avenador LP700-4</h1>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <Button variant="contained" color="secondary" className={classes.btn_width} >Book Now <StaticImage
                                    src="../../assets/images/Path.png"
                                    alt="arrow"
                                    placeholder="blurred"
                                    className={classes.arrow_customization}
                                /></Button>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <StaticImage
                                src="../../assets/images/car (1).jpg"
                                alt="image"
                                placeholder="blurred"
                                className={classes.img_width_height}
                            />
                            <Carousel.Caption className={classes.content_position}>

                                <div className={classes.div_center}>
                                    <h1>Lamborghini</h1>
                                    <h1>Avenador LP700-4</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <Button variant="contained" color="secondary" className={classes.btn_width} >Book Now <StaticImage
                                        src="../../assets/images/Path.png"
                                        alt="arrow"
                                        placeholder="blurred"
                                        className={classes.arrow_customization}
                                    /></Button>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <StaticImage
                                src="../../assets/images/car (2).jpg"
                                alt="image"
                                placeholder="blurred"
                                className={classes.img_width_height}
                            />
                            <Carousel.Caption className={classes.content_position}>

                                <div className={classes.div_center}>
                                    <h1>Lamborghini</h1>
                                    <h1>Avenador LP700-4</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <Button variant="contained" color="secondary" className={classes.btn_width} >Book Now <StaticImage
                                        src="../../assets/images/Path.png"
                                        alt="arrow"
                                        placeholder="blurred"
                                        className={classes.arrow_customization}
                                    /></Button>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
            </Grid>
        </>
    )
}