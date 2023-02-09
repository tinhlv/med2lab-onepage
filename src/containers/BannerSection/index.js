import React from 'react'
import { Image } from 'react-bootstrap'
import imageRight from '../../assets/images/banner/pic_banner_right.png'

//components
import PartnersSection from "../PartnersSection";

const BannerSection = () => (
    <section id="banner">
        <div className="banner-area banner-area-2">
            <div className='container h-100 position-relative'>
                <div className="row justify-content-md-center">
                    <div className="col-lg-7">
                        <div className='bannerCt'>
                            <h1 className="entry-title">
                                Empowering learners through insightful feedback
                            </h1>
                            <h2 className="entry-sub-title">
                                An AI-powered interactive platform for improving clinical performance
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <Image className="img-baner-right" src={imageRight} fluid alt="banner" />
                </div>
                <div className='form-request margin-for-bottom'>
                    <p className="form-request__heading">Request a live demo from the Med2Lab team</p>
                    <div className="email-form">
                        <input className="form-control email-form__input" type={`email`} placeholder="Enter your email address" />
                        <button className="btn btn_primary email-form__btn">Request Demo <span className="icon-arrow-right ml-2"></span></button>
                    </div>
                </div>
            </div>
        </div>
        <PartnersSection />
    </section>
)
export default BannerSection