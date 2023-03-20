// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/style.module.css";
// import Header from "../Components/Header.js";
import HeroHeader from "../Components/HeroHeader";
import SideNavbar from "../Components/SideNavbr";
import HeaderContent from "../Components/HeaderContent";
import Footer from "../Components/footer";
import Banner from "../Components/BannerPic";
import Navbar from "../Components/newNavbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroHeader />
      <div className={styles.heroHeaderContent}>
        <HeaderContent />
        <SideNavbar />
      </div>
      <Footer />
      <Banner />
    </div>
  );
}
