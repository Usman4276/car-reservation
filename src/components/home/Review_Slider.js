import React, { useState } from 'react';
import { use_Review_Slider_Style } from '../../assets/css/all_home_page_styles/Review_Slider_Style';
import { Grid, Typography, Box } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-bootstrap';
import "../../assets/css/reviews_carousel_style/carousel_arrows.css"
import StarsRating from 'stars-rating'

export const Review_Slider = (props) => {

    const [rating, setRating] = useState('');

    const classes = use_Review_Slider_Style();

    const ratingChanged = (newRating) => {

        setRating(newRating);
    }

    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Carousel interval={2000} indicators={false}>
                        <Carousel.Item className={classes.carousel_item} >
                            <Carousel.Caption className={classes.carousel_caption}>
                                <Box className={classes.svg_box_container}>
                                    <Box className={classes.svg_style}>
                                        <StaticImage
                                            src="../../assets/images/SVG_s/pointer.svg"
                                            alt="pointer image"
                                            placeholder="blurred"
                                            className={classes.left_svg_style}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="h4" className={classes.review_text_title} >
                                            {props.myValue ? 'recent reviews' : 'what clients say'}

                                        </Typography>
                                    </Box>
                                    <Box className={classes.svg_style}>
                                        <StaticImage
                                            src="../../assets/images/SVG_s/pointer.svg"
                                            alt="pointer image"
                                            placeholder="blurred"
                                            className={classes.right_svg_style}
                                        />
                                    </Box>
                                </Box>

                                <Typography variant="body2" className={classes.review_text_body} >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Tenetur praesentium unde temporibus obcaecati doloribus officia maxime excepturi quas exercitationem.
                                </Typography>

                                <StaticImage
                                    src="../../assets/images/Testi 1.png"
                                    alt="image"
                                    placeholder="blurred"
                                />

                                <Typography variant="h6">
                                    customer name
                                </Typography>

                                <StarsRating
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#E41A02'}
                                    value={rating}
                                    className={classes.rating_style}
                                />

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={classes.carousel_item}>
                            <Carousel.Caption className={classes.carousel_caption}>

                                <Box className={classes.svg_box_container}>
                                    <Box className={classes.svg_style}>
                                        <StaticImage
                                            src="../../assets/images/SVG_s/pointer.svg"
                                            alt="pointer image"
                                            placeholder="blurred"
                                            className={classes.left_svg_style}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="h4" className={classes.review_text_title} >
                                            {props.myValue ? 'recent reviews' : 'what clients say'}
                                        </Typography>
                                    </Box>
                                    <Box className={classes.svg_style}>
                                        <StaticImage
                                            src="../../assets/images/SVG_s/pointer.svg"
                                            alt="pointer image"
                                            placeholder="blurred"
                                            className={classes.right_svg_style}
                                        />
                                    </Box>
                                </Box>

                                <Typography variant="body2" className={classes.review_text_body} >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium unde temporibus obcaecati doloribus officia maxime excepturi quas exercitationem.
                                </Typography>

                                <StaticImage
                                    src="../../assets/images/Testi 2.png"
                                    alt="image"
                                    placeholder="blurred"
                                />

                                <Typography variant="h6">
                                    customer name
                                </Typography>

                                <StarsRating
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#E41A02'}
                                    value={rating}
                                    className={classes.rating_style}
                                />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={classes.carousel_item}>
                            <Carousel.Caption className={classes.carousel_caption}>

                                <Box className={classes.svg_box_container}>
                                    <Box className={classes.svg_style}>
                                        <StaticImage
                                            src="../../assets/images/SVG_s/pointer.svg"
                                            alt="pointer image"
                                            placeholder="blurred"
                                            className={classes.left_svg_style}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography variant="h4" className={classes.review_text_title} >
                                            {props.myValue ? 'recent reviews' : 'what clients say'}
                                        </Typography>
                                    </Box>
                                    <Box className={classes.svg_style}>
                                        <StaticImage
                                            src="../../assets/images/SVG_s/pointer.svg"
                                            alt="pointer image"
                                            placeholder="blurred"
                                            className={classes.right_svg_style}
                                        />
                                    </Box>
                                </Box>

                                <Typography variant="body2" className={classes.review_text_body} >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium unde temporibus obcaecati doloribus officia maxime excepturi quas exercitationem.
                                </Typography>

                                <StaticImage
                                    src="../../assets/images/Testim 2.png"
                                    alt="image"
                                    placeholder="blurred"
                                />

                                <Typography variant="h6">
                                    customer name
                                </Typography>

                                <StarsRating
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#E41A02'}
                                    value={rating}
                                    className={classes.rating_style}
                                />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
            </Grid>
        </>
    )
}