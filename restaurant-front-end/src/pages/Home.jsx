import React from 'react';
import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
const Fragment = React.Fragment;
const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSlider />
        </Fragment>
    );
}

export default Home;