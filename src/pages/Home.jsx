import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import HeroSection from "../component/Home/Hero/Hero";
import About from "../component/Home/About/About";
import Service from "../component/Home/Service/Service";
import Book from "../component/Home/Book/Book";
import Blog from "../component/Home/Blog/Blog";
import Podcast from "../component/Home/Podcast/Podcast";


const Home =()=>{
    return(
        <>
        <Header/>
        <HeroSection/>
        <About/>
        <Service/>
        <Book/>
        <Blog/>
        <Podcast/> 
        <Footer/>
        </>
    )
}
export default Home