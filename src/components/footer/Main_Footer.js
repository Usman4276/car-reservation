import React from 'react';
import { use_Main_Footer_Style } from '../../assets/css/all_footer_styles/Main_Footer_Style';
import { Grid, Typography, Box, IconButton } from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import ScrollToTop from "react-scroll-to-top";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const Main_Footer = () => {

    const classes = use_Main_Footer_Style();

    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Box className={classes.main_box_container}>
                        <Box>
                            <Typography variant="body2">
                                copyright &copy; 2020. rotors by merkulove
                            </Typography>
                        </Box>

                        {/* ----social link style---- */}

                        <Box className={classes.social_links_style}>
                            <Box >
                                <IconButton className={classes.social_link_color}>
                                    <FacebookIcon
                                        fontSize="small"
                                    />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton className={classes.social_link_color}>
                                    <TwitterIcon
                                        fontSize="small"
                                    />
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton className={classes.social_link_color}>
                                    <InstagramIcon
                                        fontSize="small"
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <ScrollToTop smooth                            
                            component={<KeyboardArrowUpIcon fontSize="medium" style={{ color: "white", height: "2rem" }} />}
                            style={{ background: "#6E7684", borderRadius: "50%" }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}