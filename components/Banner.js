import { useState } from "react"
import Slider from "@mui/material/Slider";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material/ListItemSecondaryAction";
import styles from '../app/page.module.css'
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
//import { makeStyles } from "@mui/styles";


const images = [
    {
        img: '/images/zong-ad-banner.jpg',
        title: 'Zong-Ad',
        width: 20000,
        height: 10000
    },
    {
        img: '/images/Jazz.jpg',
        title: 'Zong-Ad',
        width: 2000,
        height: 1000
    },
    {
        img: '/images/Ufone.jpg',
        title: 'Zong-Ad',
        width: 2000,
        height: 1000
    }
]



const Banner = () => {


    const [activeBanner, setActiveBanner] = useState(0);

    const handleBannerChange = (banner) => {
        setActiveBanner(banner);
    }

    const maxBanner = images.length;

    return (
        <div className={styles.bannerDiv}>
            <h1 className={styles.bannerText}>Offers for you</h1>
            <div style={{ width: '80%', height: '100%', borderRadius: '30px' }}>
                <Carousel
                    autoPlay={true}
                    animation={"slide"}
                    navButtonsAlwaysVisible={true}
                    cycleNavigation={true}
                    interval={5000}
                    index={activeBanner}
                    onChange={handleBannerChange}
                >
                    {images.map((image, index) => {
                        return (
                            <div key={index}>
                                {Math.abs(activeBanner - index) <= 2 ? (
                                    <img
                                        src={image.img}
                                        alt={image.title}
                                        className={styles.carouselImg}
                                    />
                                ) : null}
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}



export default Banner;