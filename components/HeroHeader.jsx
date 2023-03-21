
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
