import React from 'react';
import { use_Account_Style } from '../assets/css/account_style/Account_Style';
import { Mini_navbar } from '../components/navbar/Mini-navbar';
import { Navbar } from '../components/navbar/Navbar';
import { Grid, Box, Typography } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import MyBreadcrumbs from '../components/breadcrumbs/MyBreadcrumbs';
import { Link } from 'gatsby';
import PersonIcon from '@material-ui/icons/Person';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HistoryIcon from '@material-ui/icons/History';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { Sub_Footer } from '../components/footer/Sub_Footer';
import { Main_Footer } from '../components/footer/Main_Footer';

const Account = () => {

    const classes = use_Account_Style();
   
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
                            src="../assets/images/Short Banner -1(1).png"
                            alt="banner img"
                            placeholder="blurred"
                        />
                        <Typography className={classes.text_styles}>account</Typography>
                    </Box>
                </Grid>
            </Grid>

           {/* ----BreadCrumbs--- */}

           <MyBreadcrumbs value={7} />

            {/* ----Account detail section---- */}

            <Grid container style={{ marginTop: "3rem" }}>
                <Grid item xs={12} md={4} className={classes.grid4_container}>
                    <Box className={classes.account_container}>
                        <Typography variant="h5" style={{ marginBottom: "2rem", fontWeight: "bold", textAlign: "center" }}>
                            account details:
                        </Typography>

                        <Box className={classes.account_icons}>
                            <Box style={{ display: "flex", padding: "1rem" }}>
                                <PersonIcon
                                    style={{ marginRight: "6px" }}
                                />
                                <Typography>john doe</Typography>
                            </Box>

                            <Link to="#" style={{ textDecoration: "none", color: "rgb(197, 39, 39)", padding: "1rem", fontWeight: "bold", marginLeft: "3rem" }}>Logout
                                <TrendingFlatIcon fontSize="medium" />
                            </Link>
                            <Box style={{ display: "flex", padding: "1rem" }}>
                                <AccountBoxIcon
                                    style={{ marginRight: "6px" }}
                                />
                                <Typography>booking profile</Typography>
                            </Box>

                            <Box style={{ display: "flex", padding: "1rem" }}>
                                <HistoryIcon
                                    style={{ marginRight: "6px" }}
                                />
                                <Typography>booking history</Typography>
                            </Box>

                        </Box>
                    </Box>
                </Grid>

                {/* ----Account section---- */}

                <Grid item xs={12} md={8} className={classes.grid8_container}>
                    <Typography variant="h5" style={{ width: "42vw", textTransform: "capitalize", height: "6vh", marginTop: "4rem", fontWeight: "bold" }}>
                        account
                    </Typography>
                    <Box style={{ marginTop: "1rem" }}>
                        <Box style={{
                            display: "flex", paddingTop: "1rem",
                            paddingBottom: "1rem",
                            textTransform: "capitalize",
                        }}>
                            <Typography variant="body1">
                                name:
                            </Typography>
                            <Typography variant="body1" style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                                john doe
                            </Typography>
                        </Box>
                        <Box style={{
                            display: "flex", paddingTop: "1rem",
                            paddingBottom: "1rem",
                            textTransform: "capitalize",
                        }}>
                            <Typography variant="body1">
                                e-mail:
                            </Typography>
                            <Typography variant="body1" style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                                emailjohndoe@email
                            </Typography>
                        </Box>
                        <Box style={{
                            display: "flex", paddingTop: "1rem",
                            paddingBottom: "1rem",
                            textTransform: "capitalize",
                        }}>
                            <Typography variant="body1">
                                phone number:
                            </Typography>
                            <Typography variant="body1" style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                                +1-202-555-0104
                            </Typography>
                        </Box>
                        <Box style={{
                            display: "flex", paddingTop: "1rem",
                            paddingBottom: "1rem",
                            textTransform: "capitalize",
                        }}>
                            <Typography variant="body1">
                                address:
                            </Typography>
                            <Typography variant="body1" style={{ fontWeight: "bold", marginLeft: "1rem" }}>
                                60 stonybrook lane atlanta, ga 30303
                            </Typography>
                        </Box>
                        <Box style={{ marginTop: "2rem" }}>
                            <Link to="#" style={{ textDecoration: "none", color: "rgb(197, 39, 39)", padding: "1rem", fontWeight: "bold", marginLeft: "3rem", textTransform: "capitalize" }}>change account information
                                <TrendingFlatIcon fontSize="medium" />
                            </Link>
                        </Box>
                    </Box>

                </Grid>

                {/* ---hr tag--- */}

                <hr style={{ marginLeft: "37rem", width: "30%", marginTop: "4rem" }} />

                {/* ----booking profiles---- */}

                <Grid item xs={12} className={classes.booking_prof_container}>

                    <Box style={{ marginTop: "1rem" }}>
                        <Box style={{ padding: "1rem", fontWeight: "bold" }}>
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                booking profiles:
                            </Typography>
                        </Box>
                        <Box>
                            <Box style={{ display: "flex", padding: "1rem" }} >
                                <Typography>profile ID:</Typography>
                                <Typography style={{ fontWeight: "bold", marginLeft: "1rem" }}>123123jt:</Typography>
                            </Box>
                            <Box style={{ display: "flex", padding: "1rem" }} >
                                <Typography>payment method:</Typography>
                                <Typography style={{ fontWeight: "bold", marginLeft: "1rem" }}>visa credit card</Typography>
                            </Box>
                            <Box style={{ display: "flex", padding: "1rem" }} >
                                <Typography>phone number:</Typography>
                                <Typography style={{ fontWeight: "bold", marginLeft: "1rem" }}>+1-202-555-0104</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                {/* ---hr tag--- */}

                <hr style={{ marginLeft: "37rem", width: "30%", marginTop: "4rem" }} />

                {/* ----booking history---- */}

                <Grid item xs={12} className={classes.booking_history_container}>

                    <Box style={{ marginTop: "1rem" }}>
                        <Box style={{ padding: "1rem", fontWeight: "bold" }}>
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                booking history:
                            </Typography>
                        </Box>
                        <Box>
                            <Box style={{ display: "flex", padding: "1rem" }} >
                                <Typography>upcoming reservations:</Typography>
                                <Typography style={{ fontWeight: "bold", marginLeft: "1rem" }}>no reservations yet:</Typography>
                            </Box>
                            <Box style={{ display: "flex", padding: "1rem" }} >
                                <Typography>past rentals:</Typography>
                                <Typography style={{ fontWeight: "bold", marginLeft: "1rem" }}>0</Typography>
                            </Box>
                            <Box style={{ marginTop: "2rem" }}>
                                <Link to="#" style={{ textDecoration: "none", color: "rgb(197, 39, 39)", padding: "1rem", fontWeight: "bold", marginLeft: "3rem", textTransform: "capitalize" }}>book a car
                                    <TrendingFlatIcon fontSize="medium" />
                                </Link>
                            </Box>
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

export default Account;