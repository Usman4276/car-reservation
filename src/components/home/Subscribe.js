import React from 'react';
import { Grid, Typography, Box, IconButton, TextField, Button } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import { use_Subscribe_Style } from '../../assets/css/all_home_page_styles/Subscribe_Style';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export const Subscribe = () => {

    const classes = use_Subscribe_Style();
    return (
        <>
            {/* ----Blog Section---- */}

            <Grid container className={classes.main_container}>
                <Grid item xs={12} md={6}>
                    <Box className={classes.blog_main_box_container}>
                        <Box>
                            <Typography variant="h5" className={classes.blog_title}>
                                from the blog:
                            </Typography>
                        </Box>
                        <Box className={classes.blog_img}>
                            <StaticImage
                                src="../../assets/images/Small Blog 1.png"
                                alt="blog img"
                                placeholder="blurred"
                            />
                            <Box>
                                <Typography variant="body1" className={classes.blog_body_text}>
                                    purus in massa
                                </Typography>
                            </Box>
                        </Box>
                        <Box className={classes.blog_img}>
                            <StaticImage
                                src="../../assets/images/Small Blog 2.png"
                                alt="blog img"
                                placeholder="blurred"
                            />
                            <Box>
                                <Typography variant="body1" className={classes.blog_body_text}>
                                    vestibulum loboritis
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* ---Subscribe Section--- */}

                <Grid xs={12} md={6}>
                    <Box className={classes.subscribe_main_box_container}>
                        <Box>
                            <Typography variant="h5" className={classes.blog_title}>
                                subscribe:
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" className={classes.subscribe_body_text}>
                                Lorem ipsum dolor sit amet consectetur
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <FacebookIcon
                                    fontSize="small"
                                />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon
                                    fontSize="small"
                                />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon
                                    fontSize="small"
                                />
                            </IconButton>
                        </Box>
                        <Box className={classes.subscribe_textfield_button_container}>
                            <Box className={classes.subscribe_textfield}>
                                <TextField
                                    type="email"
                                    placeholder="Enter your e-mail"
                                    variant="outlined"
                                />
                            </Box>
                            <Box>
                                <Button variant="contained" color="secondary" className={classes.btn_style} >Subscribe <StaticImage
                                    src="../../assets/images/Path.png"
                                    alt="arrow"
                                    placeholder="blurred"
                                    className={classes.arrow_customization}
                                /></Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* -----hr Margins---- */}

            <hr
                className={classes.margins}
             />
             
        </>
    )
}