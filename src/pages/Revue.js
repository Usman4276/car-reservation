import React, { useState } from 'react';
import { use_review_style } from '../assets/css/reviews_style/Reviews_Style';
import { Mini_navbar } from '../components/navbar/Mini-navbar';
import { Navbar } from '../components/navbar/Navbar';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { StaticImage } from 'gatsby-plugin-image';
import MyBreadcrumbs from '../components/breadcrumbs/MyBreadcrumbs';
import { Link } from 'gatsby';
import { Review_Slider } from "../components/home/Review_Slider";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuItem from '@material-ui/core/MenuItem';
import '../assets/css/reviews_style/style.css';
import StarsRating from 'stars-rating'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import ReactPaginate from 'react-paginate';
// import Pagination from "react-js-pagination";
// import Pagination from 'rc-pagination';
// import Pagination from 'react-bootstrap/Pagination'
// import ReactLoading from 'react-loading';
import { Sub_Footer } from '../components/footer/Sub_Footer';
import { Main_Footer } from '../components/footer/Main_Footer';


const Revue = () => {

    const [rating, setRating] = useState('');
    const classes = use_review_style();

    // ----media query----
    const matches = useMediaQuery('(min-width:960px)');

    // ---textfield drop down value---

    const currencies = [
        {
            value: '1',
            label: '1 Star',
        },
        {
            value: '2',
            label: '2 Star',
        },
        {
            value: '3',
            label: '3 Star',
        },
        {
            value: '4',
            label: '4 Star',
        },
        {
            value: '5',
            label: '5 Star',
        },
    ];

    // ----Rating change handler----

    const ratingChanged = (newRating) => {

        setRating(newRating);
    }

    const handler = (e, value) => {

        console.log(e.target.value);
        console.log(value);

    }

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
                            src="../assets/images/Short Banner 4(1).png"
                            alt="banner img"
                            placeholder="blurred"
                        />
                        <Typography className={classes.text_styles}>reviews</Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* ----BreadCrumbs--- */}

            <MyBreadcrumbs value={5} />

            {/* ----Reviews---- */}

            <Review_Slider myValue='true' />

            {/* ----Feedback---- */}

            <Grid container style={{ backgroundColor: "#161829", color: "white", marginTop: "-5rem" }}>

                <Grid item xs={12}>
                    <Typography variant="h4" style={{ textTransform: "capitalize", textAlign: "center", marginTop: "6rem", marginBottom: "2rem" }}>
                        <StaticImage
                            src="../assets/images/SVG_s/pointer.svg"
                            alt="pointer image"
                            placeholder="blurred"
                            className={classes.left_svg_style}
                        />
                        leave your feedback
                        <StaticImage
                            src="../../assets/images/SVG_s/pointer.svg"
                            alt="pointer image"
                            placeholder="blurred"
                            className={classes.right_svg_style}
                        />
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
                        <TextField type="text" variant="outlined" placeholder="First Name" className={classes.text_style} />
                    </Box>

                </Grid>



                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-end" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <TextField type="text" variant="outlined" placeholder="Email" className={classes.text_style} />
                    </Box>

                </Grid>

                <Grid item xs={12} md={6} style={matches ? { display: "flex", justifyContent: "flex-start" } : { display: "flex", justifyContent: "center" }}>

                    <Box className={matches ? classes.box_one : classes.box_one_p1}>
                        <Box className="override1 override2">
                            <TextField
                                id="standard-select-currency"
                                select
                                helperText="Please Rate us"
                                className={classes.text_style1}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Box>

                </Grid>

                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>

                    <Box className='override' style={matches ? { padding: "10px", width: "54vw" } : { padding: "10px", width: "40vw" }}>
                        <TextField type="text" variant="outlined" placeholder="Ask your question here" className={classes.text_style1} />
                    </Box>

                </Grid>

                <Grid item xs={12} className={classes.btn_style}>
                    <Button variant="contained" color="secondary" className={classes.btn_width} >leave testimonial <StaticImage
                        src="../../assets/images/Path.png"
                        alt="arrow"
                        placeholder="blurred"
                        className={classes.arrow_customization}
                    /></Button>
                </Grid>

            </Grid>

            {/* ----Subscribe & Reviews---- */}

            <Grid container style={{ marginTop: "7rem" }}>
                <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                    <Box style={{ display: "flex", width: "70%" }}>

                        {/* ----subscribe section---- */}

                        <Grid item xs={4} style={{ marginRight: "4rem" }}>
                            <Box className={classes.account_container}>
                                <Box style={{ padding: "1rem" }}>
                                    <Box style={{ paddingBottom: "1rem" }}>
                                        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                                            subscribe:
                                        </Typography>
                                    </Box>
                                    <Box style={{ paddingBottom: "1rem" }}>
                                        <Box className="override3">
                                            <TextField variant="outlined" placeholder="Enter your e-mail" style={{ backgroundColor: "white" }} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Button variant="contained" color="secondary" className={classes.btn_width}>subscribe <StaticImage
                                            src="../../assets/images/Path.png"
                                            alt="arrow"
                                            placeholder="blurred"
                                            className={classes.arrow_customization}
                                        /></Button>
                                    </Box>
                                </Box>
                                <Box style={{ padding: "1rem", marginTop: "1rem" }}>
                                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                        latest news:
                                    </Typography>
                                </Box>
                                <Box style={{ padding: "1rem" }}>
                                    <StaticImage
                                        src="../../src/assets/images/Small Blog 1.png"
                                        alt="image"
                                        placeholder="blurred"
                                    />
                                    <Typography style={{ paddingTop: "1rem", fontSize: "15px", fontWeight: "bold" }}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ut.
                                    </Typography>
                                </Box>
                                <Box style={{ padding: "1rem" }}>
                                    <StaticImage
                                        src="../../src/assets/images/Small Blog 2.png"
                                        alt="image"
                                        placeholder="blurred"
                                    />
                                    <Typography style={{ paddingTop: "1rem", fontSize: "15px", fontWeight: "bold" }}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Doloribus, ut.
                                    </Typography>
                                </Box>
                                <Box style={{ padding: "1rem" }}>
                                    <Box style={{ paddingBottom: "1rem" }}>
                                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                            categories:
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Accordion allowZeroExpanded>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        vehicle guide
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <Typography style={{ fontSize: "12px" }}>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                                    </Typography>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        best offers
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <Typography style={{ fontSize: "12px" }}>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                                    </Typography>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        travel guides
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <Typography style={{ fontSize: "12px" }}>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                                    </Typography>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        on the road
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <Typography style={{ fontSize: "12px" }}>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Assumenda consequatur vel labore et ea itaque hic, ratione praesentium minima
                                                    </Typography>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        {/* ----Reviews section---- */}

                        <Grid item xs={8}>
                            <Box style={{ padding: "2rem" }}>
                                <Box style={{ display: "flex" }}>
                                    <StaticImage
                                        src="../../assets/images/Testi 1.png"
                                        alt="image"
                                        placeholder="blurred"
                                    />

                                    <Box style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>

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
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography style={{ textAlign: "justify", paddingTop: "1rem", fontSize: "14px" }}>
                                        <span style={{ fontSize: "2rem" }}>&#8220;</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem consequuntur quibusdam. Rerum, laboriosam explicabo et iure quibusdam voluptatibus voluptas, quis nesciunt corrupti at eius doloremque odit consectetur veniam ullam!<span style={{ fontSize: "2rem" }}>&#8221;</span>

                                    </Typography>
                                </Box>
                            </Box>

                            {/* ---hr tag--- */}

                            <hr />

                            <Box style={{ padding: "2rem" }}>
                                <Box style={{ display: "flex" }}>
                                    <StaticImage
                                        src="../../assets/images/Testi 2.png"
                                        alt="image"
                                        placeholder="blurred"
                                    />

                                    <Box style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>

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
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography style={{ textAlign: "justify", paddingTop: "1rem", fontSize: "14px" }}>
                                        <span style={{ fontSize: "2rem" }}>&#8220;</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem consequuntur quibusdam. Rerum, laboriosam explicabo et iure quibusdam voluptatibus voluptas, quis nesciunt corrupti at eius doloremque odit consectetur veniam ullam!<span style={{ fontSize: "2rem" }}>&#8221;</span>
                                    </Typography>
                                </Box>
                            </Box>

                            {/* ---hr tag--- */}

                            <hr />

                            <Box style={{ padding: "2rem" }}>
                                <Box style={{ display: "flex" }}>
                                    <StaticImage
                                        src="../../assets/images/Testim 2.png"
                                        alt="image"
                                        placeholder="blurred"
                                    />
                                    <Box style={{ display: "flex", flexDirection: "column", paddingLeft: "1rem" }}>

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
                                    </Box>

                                </Box>
                                <Box>
                                    <Typography style={{ textAlign: "justify", paddingTop: "1rem", fontSize: "14px" }}>
                                        <span style={{ fontSize: "2rem" }}>&#8220;</span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem exercitationem consequuntur quibusdam. Rerum, laboriosam explicabo et iure quibusdam voluptatibus voluptas, quis nesciunt corrupti at eius doloremque odit consectetur veniam ullam!<span style={{ fontSize: "2rem" }}>&#8221;</span>
                                    </Typography>
                                </Box>
                            </Box>

                            {/* ---hr tag--- */}

                            <hr />

                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            {/* ----Pagination---- */}
            <div className="commentBox">
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}


                pageCount={3}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}

            />
            </div>

            {/* <Pagination onSelect={handler}>
                <Pagination.Prev />
                <Pagination.Item >{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next />
            </Pagination> */}
            {/* <ReactLoading type="balls" color="red" height={667} width={375} /> */}

            {/* ----Footer section---- */}

            <Sub_Footer />
            <Main_Footer />
        </>
    )
}

export default Revue;