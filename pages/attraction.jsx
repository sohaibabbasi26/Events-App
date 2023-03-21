
"use client";
import "../styles/attraction.css"
// import "./responsive.css"







import Image from "next/image"

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { AiFillStar } from "react-icons/ai"

import 'bootstrap/dist/css/bootstrap.min.css'
import Comment from "../components/comment"
import Review from "../components/review/review"
import Corosoul from "../components/Corousel/corosoul"
import Cover from "../components/cover/cover"
import About from "../components/about/about"

import City from "./city"


import HeroHeader from "../components/HeroHeader";
import SideNavbar from "../components/SideNavbr";
import HeaderContent from "../components/HeaderContent";
import Footer from "../components/footer";
import Banner from "../components/BannerPic";
import Navbar from "../components/newNavbar";


import styles from "../styles/style.module.css";
import '../styles/globals.css';


const Post = () => {









    return (


        <div className="main_screen_base">






            {/* <Cover /> */}

            {/* <About /> */}

            <HeroHeader />

            <div className={styles.heroHeaderContent}>
        <HeaderContent />
        <SideNavbar />
      </div>

            <Corosoul />

            <Review />

            <Comment />


            <Image className="page_bottom_cover" src="/cover.png" width={1000} height={200}></Image>



        </div >

    )

}

export default Post