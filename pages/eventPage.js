// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/style.module.css";
// import Header from "../Components/Header.js";
import HeroHeader from "../components/HeroHeader";
import HeaderContent from "../components/HeaderContent";
import Banner from "../components/eventBanner";
import Navbar from "../components/eventNav";

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
