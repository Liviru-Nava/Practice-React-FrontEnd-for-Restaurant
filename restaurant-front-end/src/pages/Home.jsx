import React from 'react';
import Header from "../components/header/Header";
import HeroSlider from "../components/hero-slider/HeroSlider";
import PopularMenu from '../components/popular_menu/popularMenu';
import ChooseUs from '../components/choose-us/ChooseUs';
const Fragment = React.Fragment;
const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSlider />
            <PopularMenu />
            <ChooseUs/>
        </Fragment>
    );
}

export default Home;