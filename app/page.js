"use client"

import Navbar from '@/components/Navbar'
// import Navbar from '@/components/navbarMui/navbar'

// import BannerSlider from '@/components/Banner';

import Features from '@/components/Features';
import Attractions from '@/components/Attractions';
import Events from '@/components/Events';
import styles from '../app/page.module.css';
// import HomeCarousel from '@/components/HomeCarousel';
import BannerSlider from '@/components/Banner';
import Banner from '@/components/BannerPic';
import Search from '@/components/SearchBar';

export default function Home() {
  console.log(`hellow this is next js`);
  return (
    <div className={styles.main}>
      <Navbar />
      {/* <Search /> */}
      <Features />
      {/* <HomeCarousel /> */}
      <BannerSlider />
      <Attractions />
      <Events />
      <Banner />
    </div>
  )
}