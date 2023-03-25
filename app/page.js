"use client"

import Navbar from '@/components/Navbar'
import BannerSlider from '@/components/Banner';
import Features from '@/components/Features';
import Attractions from '@/components/Attractions';
import Events from '@/components/Events';
import styles from '../app/page.module.css';
import Banner from '@/components/BannerPic';

 
export default function Home() {
  console.log(`hellow this is next js`);
  return (
    <div className={styles.main}>
      <Navbar />
      <Features />
      <BannerSlider />
      <Attractions />
      <Events />
      <Banner />
    </div>
  )
}
