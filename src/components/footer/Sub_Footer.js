import React from 'react';
import { Grid, Box, Typography, TextField } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { use_Sub_Footer_Style } from '../../assets/css/all_footer_styles/Sub_Footer_Style';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';

export const Sub_Footer = () => {

    const classes = use_Sub_Footer_Style();

    return (
        <>
            <Grid container className={classes.main_container}>
                <Grid item xs={12} md={4} className={classes.sub_container}>
                    <Box className={classes.img_style}>
                        <StaticImage
                            src="../../assets/images/logo.png"
                            alt="logo"
                            placeholder="blurred"
                        />
                    </Box>
                    <Box>
                        <Typography variant="body1" className={classes.para}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo, sapiente fugiat earum enim esse eligendi illo pariatur natus voluptatibus porro distinctio dolores quae soluta quibusdam praesentium qui perspiciatis provident?
                        </Typography>
                    </Box>
                    <Box className={classes.margin_one}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            /> rental information
                        </Link>
                    </Box>
                    <Box className={classes.margin_two}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            /> FAQ
                        </Link>
                    </Box>
                    <Box className={classes.margin_four} >
                        <TextField variant="outlined"
                            placeholder="Search"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment>
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            className={classes.search_textfield}
                        />
                    </Box>
                </Grid>

                {/* ---Section second--- */}

                <Grid item xs={12} md={4} className={classes.sub_container}>
                    <Box className={classes.titles}>
                        <Typography variant="h5">
                            contact us:
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
                    <Box className={classes.body_text_styles}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            />
                            other office locations
                        </Link>
                    </Box>
                    <Box className={classes.margin_seven}>
                        <MailIcon
                            fontSize="small"
                            style={{ marginRight: "6px" }}
                        />
                        rotorseml@eml.fr
                    </Box>
                    <Box className={classes.margin_seven}>
                        <PhoneEnabledIcon
                            fontSize="small"
                            style={{ marginRight: "6px" }}
                        />
                        01967 411232
                    </Box>
                </Grid>

                {/* ---Third second--- */}

                <Grid item xs={12} md={4} className={classes.sub_container}>
                    <Box className={classes.titles}>
                        <Typography variant="h5">
                            information:
                        </Typography>
                    </Box>
                    <Box className={classes.body_text_styles}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            />
                            find a car for rent in the nearest location
                        </Link>
                    </Box>
                    <Box className={classes.body_text_styles}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            />
                            cars catalog
                        </Link>
                    </Box>
                    <Box className={classes.body_text_styles}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            />
                            FAQ
                        </Link>
                    </Box>
                    <Box className={classes.body_text_styles}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            />
                            contacts
                        </Link>
                    </Box>
                    <Box className={classes.body_text_styles}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            />
                            help center
                        </Link>
                    </Box>
                    <Box className={classes.body_text_styles}>
                        <Link to="#" className={classes.links_style}>
                            <ArrowForwardIosIcon
                                fontSize="small"
                            />
                            privacy policy
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}