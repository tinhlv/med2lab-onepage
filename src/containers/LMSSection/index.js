import React from 'react'
import { Image } from 'react-bootstrap'
import imageLms from '../../assets/images/lms/pic_lms.png'
import imagequote from '../../assets/images/lms/pic_lms_quote.png'
import imageEnsureCompliance from '../../assets/images/lms/pic_ensure_compliance.png'
import imageVirtualPreceptor from '../../assets/images/lms/pic_virtual_preceptor.png'
import imageBlob from '../../assets/images/lms/pic_blob.svg'
import imageTeam01 from '../../assets/images/team/pic_team_01.png'
import imageTeam05 from '../../assets/images/team/pic_team_05.png'
import imagePath01 from '../../assets/images/path/pic_path_1.svg'
import imagePath02 from '../../assets/images/path/pic_path_2.svg'
import imagePath03 from '../../assets/images/path/pic_path_3.svg'
import imagePath04 from '../../assets/images/path/pic_path_4.svg'
import imagePath05 from '../../assets/images/path/pic_path_5.svg'
import imagePath06 from '../../assets/images/path/pic_path_6.svg'

const lmsSection = () => (
    <div className="lms-section">
        <div className="lms-intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Image src={imageLms} fluid alt="lms" />
                    </div>
                    <div className="col-md-6">
                        <div className="sys-panel">
                            <div className="sys-panel__heading-sm">
                                Med<span>2</span>Lab
                            </div>
                            <div className="sys-panel__heading-lg">
                                <span className="icon-lms sys-panel__heading-lg--icon"></span>Learning Management System
                            </div>
                        </div>
                        <h3 className="heading heading-lg">Coach and assess the intangible, mission-critical skills of your workforce</h3>
                        <div className="text-paragraph mt-5">Empower your workforce and enable higher quality care with a scalable learning platform that utilizes virtual preceptors to assess and coach intangible skills, such as, critical thinking and communication.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lms-quote-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <Image src={imagequote} fluid alt="quote" />
                    </div>
                    <div className="col-md-6">
                        <div className="bubble-box position-relative">
                            <Image className="path-top" src={imagePath01} fluid alt="path-top" />
                            <div className="bubble-arr-box arrow bl round bubble-ps-top">
                                <div className="content">
                                    <p>Med2Lab’s innovative tool overcomes the current curricular challenges of scale and standardization in the assessment of clinical reasoning.</p>
                                </div>
                            </div>
                            <div
                                className="bubble-box__avatar"
                                style={{
                                    backgroundImage: `url(${imageTeam01})`
                                }}
                            ></div>
                            <div className="bubble-box__name">
                                Dr. Jian Yi Soh
                            </div>
                            <div className="bubble-box__role">
                                National University of Singapore Yong Loo Lin School of Medicine
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ensure-compliance-section">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-6 text-center position-relative bg-image-blob">
                        <Image className="path-top" src={imagePath02} fluid alt="path-top" />
                        <Image src={imageEnsureCompliance} fluid alt="Ensure Compliance" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading heading-lg">Automatic evaluation of diagnostic reasoning</h3>
                        <div className="text-paragraph mt-5">
                            <p>Improve care quality and patient safety via detailed feedback that targets critical skills, such as, reasoning and decision making.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="virtual-preceptor-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center position-relative">
                        <Image className="path-top" src={imagePath03} fluid alt="path-top" />
                        <Image src={imageVirtualPreceptor} fluid alt="Virtual Preceptor" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading heading-lg">Coaching communication skills</h3>
                        <div className="text-paragraph mt-5">
                            <p>Detailed feedback is given to learners on their communication and patient engagement habits to improve patient satisfaction and adherence, as well as to reduce conflicts and medical errors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="patient-satisfaction-section">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-6 text-center position-relative">
                        <Image className="path-top" src={imagePath04} fluid alt="path-top" />
                        <Image src={imageBlob} fluid alt="blob" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading heading-lg">Turn knowledge base and work experience into highly relevant, interactive training curricula</h3>
                        <div className="text-paragraph mt-5">
                            <p>Coach key skills, like communication. to improve patient satisfaction and adherence. I think we need something else to go along here to make this a little bit longer a paragraph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lms-quote-section mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 position-relative">
                        <div className="bubble-box position-relative">
                            <Image className="path-top-2" src={imagePath05} fluid alt="path-top" />
                            <div className="bubble-arr-box arrow bl bubble-ps-top">
                                <div className="content">
                                    <p>Working with Med2Lab has been so enjoyable because we care about the same thing: enabling learners to learn better.</p>
                                </div>
                            </div>
                            <div
                                className="bubble-box__avatar"
                                style={{
                                    backgroundImage: `url(${imageTeam05})`
                                }}
                            ></div>
                            <div className="bubble-box__name">
                                Dr. Sharon F. Chen
                            </div>
                            <div className="bubble-box__role">
                                Stanford School of Medicine
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-section position-relative">
            <Image className="path-top" src={imagePath06} fluid alt="path-top" />
            <div className="container">
                <h3 className="heading heading-lg">Contact the<br /> Med2Lab Team<br /> for a live demo</h3>
                <div className='form-request'>
                    <p className="form-request__heading">Request a live demo from the Med2Lab team</p>
                    <div className="email-form">
                        <input className="form-control email-form__input" type={`email`} placeholder="Enter your email address" />
                        <button className="btn btn_primary email-form__btn">Request Demo <span className="icon-arrow-right ml-2"></span></button>
                    </div>
                </div>
                <p><span className="text-green">Find out more about the Med2Lab team</span>, our experience and why we’re passionate about our products.</p>
            </div>
        </div>
    </div>
)
export default lmsSection