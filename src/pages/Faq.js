import React from 'react'
import '../assets/css/faq_style/faq.css'
import { Mini_navbar } from '../components/navbar/Mini-navbar';
import { Navbar } from '../components/navbar/Navbar';
import { StaticImage } from 'gatsby-plugin-image';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { use_Faq_Styles } from '../assets/css/faq_style/Faq_Style';
import MyBreadcrumbs from '../components/breadcrumbs/MyBreadcrumbs';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../assets/css/accordian_style/accordian.css';
import CallIcon from '@material-ui/icons/Call';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { Sub_Footer } from '../components/footer/Sub_Footer';
import { Main_Footer } from '../components/footer/Main_Footer';

const Faq = () => {
    const classes = use_Faq_Styles();

    // ----media query----
    const matches = useMediaQuery('(min-width:960px)');


    return (
        <>
            {/* ---Header--- */}

            <Mini_navbar myValue="true" />
            <Navbar />

            {/* ---Banner--- */}

            <Grid container>
                <Grid item xs={3}>
                    <Box className={classes.img_style}>
                        <StaticImage
                            src="../assets/images/Short Banner 8.png"
                            alt="banner img"
                            placeholder="blurred"
                        />
                        <Typography className={classes.text_styles}>faq</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* ----BreadCrumbs--- */}

            <MyBreadcrumbs value={3} />

            {/* ---Body content--- */}

            <Grid container className={classes.body_container}>
                <Grid item xs={4}>

                    {/* ---search field--- */}

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

                    {/* ----left accordian---- */}

                    <Box className={classes.accordian_box1}>
                        <Typography variant="h5" style={{ marginBottom: "2rem", fontWeight: "bold", textAlign: "center" }}>
                            question categories:
                        </Typography>

                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        official rental information
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        billing information
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        claims & car damages
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        payment methods & deposits
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        bonus cards & programs
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        car rental protection
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        imprint & privacy
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>

                    {/* ----Support center section---- */}

                    <Box className={classes.support_center}>
                        <Typography variant="h5" style={{ marginBottom: "2rem", fontWeight: "bold", textAlign: "center", textTransform: "capitalize" }}>
                            support center:
                        </Typography>
                        <Box className={classes.support_center_item}>
                            <CallIcon fontSize="small" />
                            <Typography variant="body1" style={{ marginLeft: "8px" }}>
                                01967 411232
                            </Typography>
                        </Box>
                        <Box className={classes.support_center_item}>
                            <CallIcon fontSize="small" />
                            <Typography variant="body1" style={{ marginLeft: "8px" }}>
                                +1 01 967 411 232
                            </Typography>
                        </Box>
                        <Box className={classes.support_center_item}>
                            <HeadsetMicIcon fontSize="small" />
                            <Typography variant="body1" style={{ marginLeft: "8px" }}>
                                helprotorscenter23@frs
                            </Typography>
                        </Box>
                        <Box className={classes.support_center_item}>
                            <HeadsetMicIcon fontSize="small" />
                            <Typography variant="body1" style={{ marginLeft: "8px" }}>
                                rotorsnumberchat@frs
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* ----Information section---- */}

                <Grid item xs={8} style={{ paddingLeft: "6rem", textTransform: "capitalize" }}>
                    <Box>
                        <Typography variant="h4">
                            official rental information
                        </Typography>
                        <Typography style={{ fontSize: "14px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aperiam, natus atque necessitatibus minus ipsam quae tempora provident beatae, laudantium error perspiciatis suscipit praesentium veniam illo, voluptates expedita eligendi unde.
                            Dicta ipsam ipsum ducimus sunt quos deleniti hic minima, provident laborum excepturi porro possimus velit natus repudiandae consequuntur id, corporis molestiae quidem recusandae? Soluta delectus quae itaque deserunt voluptatem sapiente.
                            Officia non, velit neque cupiditate iste praesentium rerum cumque reiciendis quasi, deleniti accusantium dolorem tempora earum aut adipisci quaerat perferendis modi voluptates, aliquam cum quo? Consequatur doloribus dolore facilis

                        </Typography>
                    </Box>
                    <Box style={{ marginTop: "1rem" }}>
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        official rental information
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        official rental information
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        official rental information
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Accordion allowZeroExpanded>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        official rental information
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <Typography style={{ fontSize: "12px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                    </Typography>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: "1rem", fontSize: "14px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aperiam, natus atque necessitatibus minus ipsam quae tempora provident beatae, laudantium error perspiciatis suscipit praesentium veniam illo, voluptates expedita eligendi unde.
                            Dicta ipsam ipsum ducimus sunt quos deleniti hic minima, provident laborum excepturi porro possimus velit natus repudiandae consequuntur id, corporis molestiae quidem recusandae? Soluta delectus quae itaque deserunt voluptatem sapiente.
                            Officia non, velit neque cupiditate iste praesentium rerum cumque reiciendis quasi, deleniti accusantium dolorem tempora earum aut adipisci quaerat perferendis modi voluptates, aliquam cum quo? Consequatur doloribus dolore facilis
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* ---Form--- */}

            <Grid container style={{ backgroundColor: "#161829", color: "white", marginTop: "6rem" }}>
                <Grid item xs={12}>
                    <Typography variant="h4" style={{ textTransform: "capitalize", textAlign: "center", marginTop: "6rem", marginBottom: "2rem" }}>
                        <StaticImage
                            src="../assets/images/SVG_s/pointer.svg"
                            alt="pointer image"
                            placeholder="blurred"
                            className={classes.left_svg_style}
                        />
                        didn't find the answer?
                        <StaticImage
                            src="../../assets/images/SVG_s/pointer.svg"
                            alt="pointer image"
                            placeholder="blurred"
                            className={classes.right_svg_style}
                        />
                    </Typography>
                    <Typography variant="h4" style={{ textAlign: "center", marginTop: "-30px", marginBottom: "4rem", textTransform: "capitalize" }}>
                        ask us a question
                    </Typography>
                </Grid>

                {/* ----form fields---- */}

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="First Name" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-start" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Last Name" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Email" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-start" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="number" variant="outlined" placeholder="Phone Number" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>

                    <Box className='override' style={matches ? { padding: "10px", width: "54vw" } : { padding: "10px", width: "40vw" }}>
                        <TextField type="text" variant="outlined" placeholder="Ask your question here" className={classes.text_style1} />
                    </Box>

                </Grid>

                <Grid item xs={12} className={classes.btn_style}>
                    <Button variant="contained" color="secondary" className={classes.btn_width} >send question <StaticImage
                        src="../../assets/images/Path.png"
                        alt="arrow"
                        placeholder="blurred"
                        className={classes.arrow_customization}
                    /></Button>
                </Grid>

            </Grid>

            {/* ----Address section----*/}

            <Grid container className={classes.main_container}>
                <Grid item xs={12} md={6}>
                    <Box className={classes.img_container}>
                        <StaticImage
                            src="../assets/images/Contact.png"
                            alt="contact img"
                            placeholder="blurred"

                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box className={classes.titles}>
                        <Typography variant="h5">
                            main office:
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
            </Grid>

            {/* ----Footer section---- */}

            <Sub_Footer />
            <Main_Footer />
        </>

    )
}
export default Faq;