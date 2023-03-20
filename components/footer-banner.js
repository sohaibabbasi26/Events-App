import Style from './footer-banner.module.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import Image from 'next/image';
import personImg from '../images/personImg.jpg'
import companyLogo from '../images/companyLogo.png'
import compnayProfile from '../public/companyProfile.png'

const footerBanner = () => {
    return (
        <>
            <div className={Style.eventMaterialContainerBannerWrapper}>
                <div className={Style.eventMaterialContainerBanner}>
                    <div className={Style.eventMaterialBannerImage}>
                        <Image
                            className={Style.personImg}
                            alt=""
                            src={compnayProfile}
                        />
                    </div>
                    <div className={Style.eventMaterialBannerContent}>
                        <div
                            className={Style.rectangleImg2}
                            alt=""
                        />
                        <Image
                            className={Style.companyLogo}
                            alt=""
                            src={companyLogo}
                        />

                        <div className={Style.text}>
                            <b> Meet Our Company </b>
                            <p >
                                SF Symbols were introduced during WWDC 2019.
                            </p>
                                <MDBBtn className={Style.btn}>
                                    <div className={Style.getItNow}>GET IT NOW</div>
                                </MDBBtn>
                        </div>

                        <div className={Style.bannerFrame} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default footerBanner;