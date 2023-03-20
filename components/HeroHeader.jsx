// import Image from "next/image";
// import styles from "../styles/style.module.css";

// const HeroHeader = () => {
//   return (
//     <div className={styles.heroHeader}>
//       <div>
//         <div className={styles.logoImg}>
//           <Image src="/logo.png" alt="Header image" width={90} height={50} />
//         </div>
//         <div className={styles.menuImg}>
//           <Image src="/menu.png" alt="Header image" width={30} height={30} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroHeader;

import React from "react";
import Image from "next/image";
import styles from "../styles/style.module.css"

const HeroHeader = () => {
  return (
    <div className={styles.hero_header_container}>
      <div className={styles.hero_header_image}>
        <img src={"/header-img.png"} alt={"hero header image"} className={styles.desktop}  />
        <img src={"/Assets/hero_header_mobile.png"} alt={"hero header image"} className={styles.mobile}  />
      </div>
    </div>
  );
};

export default HeroHeader;
