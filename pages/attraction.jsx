
"use client";
import styles from "../styles/attraction.css"
// import "./responsive.css"







import Image from "next/image"

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { AiFillStar } from "react-icons/ai"

import Comment from "../components/comment"
import Review from "../components/review/review"
import Corosoul from "../components/Corousel/corosoul"
import Cover from "../components/cover/cover"
import About from "../components/about/about"





const Post = () => {









    return (


        <div className="main_screen_base">






            {/* <Cover /> */}

            {/* <About /> */}

            <Corosoul />

            <Review />

            <Comment />


            <Image className="page_bottom_cover" src="/cover.png" width={1000} height={200}></Image>



        </div >

    )

}

export default Post