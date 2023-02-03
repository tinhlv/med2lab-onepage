import React from 'react'
import { Image } from 'react-bootstrap'
import imageLms from '../../assets/images/lms/pic_lms.png'
import imagequote from '../../assets/images/lms/pic_lms_quote.png'
import imageEnsureCompliance from '../../assets/images/lms/pic_ensure_compliance.png'
import imageVirtualPreceptor from '../../assets/images/lms/pic_virtual_preceptor.png'
import imageBlob from '../../assets/images/lms/pic_blob.svg'
import imageTeam01 from '../../assets/images/team/pic_team_01.png'
import imagePath01 from '../../assets/images/path/pic_path_1.svg'
import imagePath02 from '../../assets/images/path/pic_path_2.svg'
import imagePath03 from '../../assets/images/path/pic_path_3.svg'
import imagePath04 from '../../assets/images/path/pic_path_4.svg'

const lmsSection = () => (
    <div className="lms-section">
        <div className="lms-intro-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
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
                        <h3 className="heading heading-lg">Coach and assess mission critical and intangible skills of your workforce</h3>
                        <div className="text-paragraph mt-5">Support your workforce with a scalable learning platform, utilising virtual preceptors to assess and coach intangible skills, like critical thinking and self-reflection, to enable the provision of high quality healthcare.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="lms-quote-section">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-md-6 text-left">
                        <Image src={imagequote} fluid alt="quote" />
                    </div>
                    <div className="col-md-6">
                        <div className="bubble-box position-relative">
                            <Image className="path-top" src={imagePath01} fluid alt="path-top" />
                            <div class="talk-bubble tri-right border-box round btm-left-in postiton-bubble">
                                <div class="talktext">
                                    <p>Med2Lab’s innovate tool overcomes the current curricullar challenges of scale and standardised assesment in teaching-and-learning of clinical reasoning</p>
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
                                National University of Singapore Tong Youg Lin School of Medicine
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ensure-compliance-section">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-6 text-right position-relative">
                        <Image className="path-top" src={imagePath02} fluid alt="path-top" />
                        <Image src={imageEnsureCompliance} fluid alt="Ensure Compliance" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading heading-lg">Coach and assess mission critical and intangible skills of your workforce</h3>
                        <div className="text-paragraph mt-5">Support your workforce with a scalable learning platform, utilising virtual preceptors to assess and coach intangible skills, like critical thinking and self-reflection, to enable the provision of high quality healthcare.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="virtual-preceptor-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-left position-relative">
                        <Image className="path-top" src={imagePath03} fluid alt="path-top" />
                        <Image src={imageVirtualPreceptor} fluid alt="Virtual Preceptor" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading heading-lg">Utilize Human-in-the-loop AI technology providing scalability and standardization</h3>
                        <div className="text-paragraph mt-5">
                            <p>Our virtual preceptors and AI technology evaluate and provide feedback on clinical reasoning.</p>
                            <p>Our unique learning management system allows assesment of critical skill sets and matches the most qualified practioners with the best work assignments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="patient-satisfaction-section">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-6 text-left position-relative">
                        <Image className="path-top" src={imagePath04} fluid alt="path-top" />
                        <Image src={imageBlob} fluid alt="blob" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading heading-lg">Improve patient satisfaction, reduce conflicts and  medical errors</h3>
                       <div className="text-paragraph mt-5">
                            <p>Coach key skills, like communication. to improve patient satisfaction and adherence. I think we need something else to go along here to make this a little bit longer a paragraph</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default lmsSection