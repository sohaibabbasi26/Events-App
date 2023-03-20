
import { MDBBtn } from 'mdb-react-ui-kit'
import Style from './event-material.module.css'
import Image from 'next/image'
import personImg from '../images/personImg.jpg'
import companyLogo from '../images/companyLogo.png'

const eventMaterial = () => {
    return (
        <>
            <div className={Style.eventMaterialContainerWrapper}  >
                <div className={Style.eventMaterialContainerBox1} >
                    <div className={Style.eventMaterialContent}>
                        <h1> New York </h1>
                        <p> What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <ul>
                            <li> "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... "</li>
                            <li> "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..." </li>
                            <li> The standard Lorem Ipsum passage, used since the 1500 </li>
                        </ul>
                    </div>
                    <div className={Style.eventIncludes}>
                        <h1> New York Dinner Cruise </h1>
                        <h3> This event includes </h3>
                        <li>
                            👍🏻 Direct interaction with the instructor
                        </li>
                        <li>
                            🖥 Access on mobile and web
                        </li>
                        <li>
                            🎥 Session recording after the workshop
                        </li>
                        <li>
                            ⌛ 1 hour live session
                        </li>
                    </div>
                </div>
                <div className={Style.eventMaterialContainerBannerWrapper}>
                    <div className={Style.eventMaterialContainerBanner}>
                        <div className={Style.eventMaterialBannerImage}>
                            <Image
                                className={Style.personImg}
                                alt=""
                                src={personImg}
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
                            <b className={Style.text}>
                                <p >Meet Our Company</p>
                            </b>
                            <div className={Style.text}>
                                <p >
                                    SF Symbols were introduced during WWDC 2019.
                                </p>
                            </div>

                            <MDBBtn className={Style.btn}>
                                <div className={Style.getItNow}>GET IT NOW</div>
                            </MDBBtn>
                            <div className={Style.bannerFrame} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default eventMaterial;