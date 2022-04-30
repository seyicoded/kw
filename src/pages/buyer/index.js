import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../new_components/Header'
import Home_content from '../../new_components/Home_Content'
import Footer from "../../components/Footer";
import AdsBox from '../../new_components/AdsBox'
 
const Main = () => {
    return (
        <div style={{ backgroundColor: "#F1F1F1", overflow: "hidden" }}>
            <Header />
            <Home_content />
            <AdsBox />
            <Footer padding="10rem 0 3rem 0" />
        </div>
    );
}
 
// Main.propTypes = {};
 
export default Main;