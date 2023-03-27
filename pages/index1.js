// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/style.module.css";
// import Header from "../Components/Header.js";
import HeroHeader from "../Components/HeroHeader";
import HeaderContent from "../Components/HeaderContent";
import Banner from "../Components/eventBanner";
import Navbar from "../Components/eventNav";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      
      <div className={styles.heroHeaderContent}>
        <HeaderContent />
      </div>

      <Banner />
    </div>
  );
}
