import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Blog_hero from "../component/Blog/Blog_hero/Blog_hero";
import Blog_contant from "../component/Blog/Blog_contant/Blog_contant";

const Blog_details=()=>{
    return(
        <>
        <Header/>
        <Blog_hero/>
        <Blog_contant/>
        <Footer/>
        </>
    )
}
export default  Blog_details