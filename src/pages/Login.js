import React from 'react';
import { Mini_navbar } from '../components/navbar/Mini-navbar';
import { Navbar } from '../components/navbar/Navbar';
import { use_login_style } from '../assets/css/login_style/Login_Style';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import MyBreadcrumbs from '../components/breadcrumbs/MyBreadcrumbs';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Checkbox from '@material-ui/core/Checkbox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import "../assets/css/login_style/ovveride_material_ui.css";
import { Sub_Footer } from '../components/footer/Sub_Footer';
import { Main_Footer } from '../components/footer/Main_Footer';

const Login = () => {

    const classes = use_login_style();

    // ----media query----
    const matches = useMediaQuery('(min-width:960px)');

    // ---textfield drop down value---

    const currencies = [
        {
            value: '1',
            label: 'Stripe',
        },
        {
            value: '2',
            label: 'Paypal',
        },
        {
            value: '3',
            label: 'Card Payment',
        },
        {
            value: '4',
            label: 'Jazz Cash',
        },
    ];

    return (
        <>
            {/* ---Header--- */}

            <Mini_navbar myValue="true" />
            <Navbar />

            {/* ---Banner--- */}

            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.img_style}>
                        <StaticImage
                            src="../assets/images/Short Banner -2(1).png"
                            alt="banner img"
                            placeholder="blurred"
                        />
                        <Typography className={classes.text_styles}>Login:</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* ----BreadCrumbs--- */}

            <MyBreadcrumbs value={5} />

            {/* ----Login section---- */}

            <Grid conainer className={classes.main_grid_container}>
                <Grid item xs={12} className={classes.grid_12_login}>
                    <Box className={classes.login_main_box}>

                        {/* ----image---- */}

                        <Grid item xs={6} className={classes.image_grid_6}>
                            <Box >
                                <StaticImage
                                    src="../assets/images/Login.png"
                                    alt="img"
                                    placeholder="blurred"
                                />
                            </Box>
                        </Grid>

                        {/* ---Heading--- */}

                        <Grid item xs={6}>
                            <Box className={classes.form_grid_6_main_box}>
                                <Box>



                                    <Box>
                                        <Typography variant="h5" className={classes.typo1}>Login:</Typography>
                                        <Typography className={classes.typo1_text}>Savings of up to 15% with our car rental solutions, global coverage and a dedicated customer team</Typography>
                                    </Box>
                                    <Box className={classes.loging_form_box1}>
                                        <Typography variant="body1" className={classes.typo2}>log in or <Link to="#" className={classes.typo2_link1}>create an account?</Link></Typography>
                                    </Box>



                                    <Box>
                                        <Box className={classes.textfield_box1} className="field_override">
                                            <TextField type="text" variant="outlined" placeholder="Your Name" className={classes.textfield_box1_field1} />
                                        </Box>

                                        <Box className={classes.textfield_box1} className="field_override">
                                            <TextField type="text" variant="outlined" placeholder="Password" className={classes.textfield_box2_field1} />
                                        </Box>
                                    </Box>



                                    <Box className={classes.btn_box}>
                                        <Button variant="contained" className={classes.btn1}>Login<TrendingFlatIcon fontSize="medium" /></Button>
                                    </Box>



                                    <Box className={classes.pw_box}>
                                        <Link to="#" style={{ textDecoration: "none" }}>
                                            reset your password by email?
                                        </Link>
                                    </Box>



                                    <Box className={classes.checkbox_box}>
                                        <Checkbox
                                            color="secondary"
                                        />
                                        <Typography className={classes.checkbox_typo1}>
                                            Save my name,email, and website in this browder for the next time I comment
                                        </Typography>
                                    </Box>



                                    <Box className={classes.pv_box}>
                                        <Link to="#" style={{ textDecoration: "none" }}>Privacy Policy</Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            {/* ----Registeration form---- */}

            {/* ---heading--- */}

            <Grid container className={classes.main_container}>
                <Grid item xs={12} className={classes.reg_grid_12}>
                    <Box className={classes.reg_box1}>
                        <Typography variant="h4" className={classes.reg_typo1}>
                            <StaticImage
                                src="../assets/images/SVG_s/pointer.svg"
                                alt="pointer image"
                                placeholder="blurred"
                                className={classes.left_svg_style}
                            />
                            register
                            <StaticImage
                                src="../../assets/images/SVG_s/pointer.svg"
                                alt="pointer image"
                                placeholder="blurred"
                                className={classes.right_svg_style}
                            />
                        </Typography>
                    </Box>
                </Grid>

                {/* ---form fields--- */}

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Your Name*" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-start" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField
                            id="standard-select-currency"
                            select
                            helperText="Choose Payment Details"
                            className={classes.text_style2}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value} >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="email" variant="outlined" placeholder="Email*" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-start" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Country" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="password" variant="outlined" placeholder="Password*" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-start" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Billing Address" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="password" variant="outlined" placeholder="Confirm Password*" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-start" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <Typography className={classes.text_style3}>
                            Your personal data will be used in mapping with the vehicles you added to the website, to manage access to your account, and for other purpose describe in our.
                        </Typography>
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="number" variant="outlined" placeholder="Phone Number" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? {
                    display: "flex", justifyContent: "flex-start", marginBottom: "4rem",
                    marginTop: "7px"
                } : { display: "flex", justifyContent: "center" }}>

                    <Box className={classes.btn_style}>
                        <Box className="reg_btn button">
                            <Button variant="contained" className={classes.btn_width} >register <StaticImage
                                src="../../assets/images/Path.png"
                                alt="arrow"
                                placeholder="blurred"
                                className={classes.arrow_customization}
                            /></Button>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            {/* ----Footer section---- */}

            <Sub_Footer />
            <Main_Footer />

        </>
    )
}

export default Login;