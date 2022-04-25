import React, { useState } from 'react'
import { use_filter_style } from '../../assets/css/all_home_page_styles/Filter_Style'
import { Box, Typography, TextField, Grid, InputAdornment, Button } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Slider } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import useMediaQuery from '@material-ui/core/useMediaQuery';



export const Filter = () => {


    const classes = use_filter_style();

    const [value, setValue] = React.useState([0, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    return (
        <>

            <form className={classes.filter_container}>
                <Grid container className={classes.box_container}>
                    <Grid item xs={12} md={3} className={classes.component}>
                        <Box className={classes.typography_style}>
                            <Typography>
                                pick up location
                            </Typography>
                        </Box>
                        <Box className={classes.address_text_field}>
                            <TextField

                                variant="standard"
                                placeholder="City, State or Airport Code"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment>
                                            <LocationOnIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.component}>
                        <Box>
                            <Box className={classes.typography_style}>
                                <Typography>
                                    pick up location
                                </Typography>
                            </Box>
                            <Box className={classes.date_field_style}>
                                <TextField
                                    variant="standard"
                                    type="date"
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.component}>
                        <Box className={classes.typography_style}>
                            <Typography>
                                price
                            </Typography>
                        </Box>
                        <Box>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                            />
                            <Box style={{ display: "flex", justifyContent: "space-around" }}>
                                <p>${value[0]}/day</p>
                                <p>${value[1]}/day</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.component}>
                        <Button variant="contained" color="secondary" className={classes.btn_style} >find a car <StaticImage
                            src="../../assets/images/Path.png"
                            alt="arrow"
                            placeholder="blurred"
                            className={classes.arrow_customization}
                        /></Button>
                    </Grid>

                </Grid>
            </form>
        </>
    )
}