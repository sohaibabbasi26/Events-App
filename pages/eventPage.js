// // import Head from "next/head";
// // import Image from "next/image";
// import styles from "../styles/style.module.css";
// import '../styles/globals.css';
// // import Header from "../Components/Header.js";
// import HeroHeader from "../components/HeroHeader";
// import SideNavbar from "../components/SideNavbr";
// import HeaderContent from "../components/HeaderContent";
// import Footer from "../components/footer";
// import Banner from "../components/BannerPic";
// import Navbar from "../components/newNavbar";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <HeroHeader />
//       <div className={styles.heroHeaderContent}>
//         <HeaderContent />
//         <SideNavbar />
//       </div>
//       <Footer />
//       <Banner />
//     </div>
//   );
//}

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
