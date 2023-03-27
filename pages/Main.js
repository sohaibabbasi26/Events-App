"use client"

import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner';
import Features from '@/components/Features';
import Attractions from '@/components/Attractions';
import Events from '@/components/Events';
import styles from '../app/page.module.css'
import Image from 'next/image'
import { Inter } from 'next/font/google'



export default function Home() {
  console.log(`hellow this is next js`);
  return (
    <div className={styles.main}>
      <Navbar />
      <Features />
      <Banner />
      <Attractions />
      <Events />
    </div>
  )}

const inter = Inter({ subsets: ['latin'] })

