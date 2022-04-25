import React from 'react';
import { Grid, Button, Box, Typography, Card, CardContent, CardActions, Tab, Tabs } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import { use_featured_vehicles_styles } from '../../assets/css/all_home_page_styles/Featured_Vehicles_Style';

export const Featured_Vehicles = () => {
    const classes = use_featured_vehicles_styles();

    return (
        <>
            <Grid container>
                <Grid xs={12}>
                    <Box className={classes.container}>
                        <Box>
                            <Typography variant="h4" style={{ textTransform: "capitalize" }}>
                                <StaticImage
                                    src="../../assets/images/SVG_s/pointer.svg"
                                    alt="pointer image"
                                    placeholder="blurred"
                                    className={classes.left_svg_style}
                                />
                                Featured Vehicles
                                <StaticImage
                                    src="../../assets/images/SVG_s/pointer.svg"
                                    alt="pointer image"
                                    placeholder="blurred"
                                    className={classes.right_svg_style}
                                />
                            </Typography>
                        </Box>
                        <Box className={classes.text_style}>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magnam totam vel maxime esse placeat, amet sapiente veritatis dignissimos! Autem accusantium non fugit fuga perferendis tempora, laborum eum quas voluptate.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.tab_container}>
                        <Tabs>
                            <Tab className={classes.tab_item} label="all" />
                            <Tab className={classes.tab_item} label="sedan" />
                            <Tab className={classes.tab_item} label="sports" />
                            <Tab className={classes.tab_item} label="luxury" />
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className={classes.card_container}>
                <Grid item xs={12} md={4}>
                    <Box className={classes.card_style}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Mercedes Maybach 2021
                                </Typography>

                                <StaticImage
                                    src="../../assets/images/car (1).jpg"
                                    alt="card image"
                                    placeholder="blurred"
                                    className={classes.card_image_style}
                                />
                                <Button variant="outlined" className={classes.price_btn_style}>$/Day</Button>
                            </CardContent>
                            <Box className={classes.btn_container}>
                                <CardActions>
                                    <Button className={classes.btn_style} variant="outlined" size="small">Sports</Button>
                                    <Button className={classes.btn_style} variant="outlined" size="small">Auto</Button>
                                    <Button className={classes.btn_style} variant="outlined" size="small">2 Passengers</Button>
                                    <Button className={classes.btn_style} variant="outlined" size="small">Gasoline</Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.card_style}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Mercedes Maybach 2021
                                </Typography>
                                <StaticImage
                                    src="../../assets/images/car (1).jpg"
                                    alt="card image"
                                    placeholder="blurred"
                                    className={classes.card_image_style}
                                />
                                <Button variant="outlined" className={classes.price_btn_style}>$/Day</Button>
                            </CardContent>
                            <CardActions className={classes.btn_container}>
                                <Button className={classes.btn_style} variant="outlined" size="small">Sports</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Auto</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">2 Passengers</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Gasoline</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.card_style}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Mercedes Maybach 2021
                                </Typography>
                                <StaticImage
                                    src="../../assets/images/car (1).jpg"
                                    alt="card image"
                                    placeholder="blurred"
                                    className={classes.card_image_style}
                                />
                                <Button variant="outlined" className={classes.price_btn_style}>$/Day</Button>
                            </CardContent>
                            <CardActions className={classes.btn_container}>
                                <Button className={classes.btn_style} variant="outlined" size="small">Sports</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Auto</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">2 Passengers</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Gasoline</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className={classes.card_container}>
                <Grid item xs={12} md={4}>
                    <Box className={classes.card_style}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Mercedes Maybach 2021
                                </Typography>
                                <StaticImage
                                    src="../../assets/images/car (1).jpg"
                                    alt="card image"
                                    placeholder="blurred"
                                    className={classes.card_image_style}
                                />
                                <Button variant="outlined" className={classes.price_btn_style}>$/Day</Button>
                            </CardContent>
                            <CardActions className={classes.btn_container}>
                                <Button className={classes.btn_style} variant="outlined" size="small">Sports</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Auto</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">2 Passengers</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Gasoline</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.card_style}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Mercedes Maybach 2021
                                </Typography>
                                <StaticImage
                                    src="../../assets/images/car (1).jpg"
                                    alt="card image"
                                    placeholder="blurred"
                                    className={classes.card_image_style}
                                />
                                <Button variant="outlined" className={classes.price_btn_style}>$/Day</Button>
                            </CardContent>
                            <CardActions className={classes.btn_container}>
                                <Button className={classes.btn_style} variant="outlined" size="small">Sports</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Auto</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">2 Passengers</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Gasoline</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box className={classes.card_style}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Mercedes Maybach 2021
                                </Typography>
                                <StaticImage
                                    src="../../assets/images/car (1).jpg"
                                    alt="card image"
                                    placeholder="blurred"
                                    className={classes.card_image_style}
                                />
                                <Button variant="outlined" className={classes.price_btn_style}>$/Day</Button>
                            </CardContent>
                            <CardActions className={classes.btn_container}>
                                <Button className={classes.btn_style} variant="outlined" size="small">Sports</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Auto</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">2 Passengers</Button>
                                <Button className={classes.btn_style} variant="outlined" size="small">Gasoline</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.btn_margins}>
                        <Button variant="contained" color="secondary" className={classes.btn_width}>book a car <StaticImage
                            src="../../assets/images/Path.png"
                            alt="arrow"
                            placeholder="blurred"
                            className={classes.arrow_customization}
                        /></Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}