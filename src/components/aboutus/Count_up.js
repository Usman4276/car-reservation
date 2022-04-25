import React from 'react'
import CountUp from 'react-countup';
import { Grid, Box, Typography } from '@material-ui/core';
import { use_Count_up_Style } from '../../assets/css/all_aboutus_page_styles/Count_up_style';
import { StaticImage } from 'gatsby-plugin-image';

export const Countup = () => {
    const classes = use_Count_up_Style();
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12}  md={4} className={classes.grid_item}>
                    <Box className={classes.main_box} >
                        <Box className={classes.box_one}>
                            <CountUp
                                start={1}
                                duration={1}
                                end={500}
                            />
                            <h1 style={{ display: "flex", alignItems: "center" }}>+</h1>
                        </Box>
                        <Box style={{ textAlign: "center" }}>
                            <StaticImage
                                src="../../assets/images/pointer.png"
                                alt="pointer img"
                                placeholder="blurred"
                            />
                        </Box>
                        <Box>
                            <Typography className={classes.text_style} >worldwide rent stations</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid_item}>
                    <Box className={classes.main_box} >
                        <CountUp
                            start={1}
                            duration={1}
                            end={3500}
                        />
                        <Box style={{ textAlign: "center" }}>
                            <StaticImage
                                src="../../assets/images/pointer.png"
                                alt="pointer img"
                                placeholder="blurred"
                            />
                        </Box>
                        <Box className={classes.text_style} >
                            <Typography>cars of various categories</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} className={classes.grid_item}>
                    <Box className={classes.main_box} >
                        <CountUp
                            start={1}
                            duration={2}
                            end={180}
                        />
                        <Box style={{ textAlign: "center" }}>
                            <StaticImage
                                src="../../assets/images/pointer.png"
                                alt="pointer img"
                                placeholder="blurred"
                            />
                        </Box>
                        <Box className={classes.text_style} >
                            <Typography>business partners</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}