import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "../components/layout/Layout"
import { Filter } from "../components/home/Filter";
import { Featured_Vehicles } from "../components/home/Featured_Vehicles";
import { WhyUs } from "../components/home/WhyUs";
import { Subscribe } from "../components/home/Subscribe";
import { Review_Slider } from "../components/home/Review_Slider";

const Home = () => {
    return (
        <>
            <Filter />
            <Featured_Vehicles />
            <WhyUs />
            <Subscribe />
            <Review_Slider />
        </>
    )
}

export default Home
