import React from 'react'
import { Image } from 'react-bootstrap'
import imageLms from '../../assets/images/lms/pic_lms.png'
import imagequote from '../../assets/images/lms/pic_lms_quote.png'
import imageEnsureCompliance from '../../assets/images/lms/pic_ensure_compliance.png'
import imageVirtualPreceptor from '../../assets/images/lms/pic_virtual_preceptor.png'
import imageBlob from '../../assets/images/lms/pic_blob.svg'

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
        <div className="lms-quote-section section-mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-left">
                        <Image src={imagequote} fluid alt="quote" />
                    </div>
                    <div className="col-md-6">
                        Content.....
                    </div>
                </div>
            </div>
        </div>
        <div className="ensure-compliance-section section-mt-100">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-6 text-right">
                        <Image src={imageEnsureCompliance} fluid alt="Ensure Compliance" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading heading-lg">Coach and assess mission critical and intangible skills of your workforce</h3>
                        <div className="text-paragraph mt-5">Support your workforce with a scalable learning platform, utilising virtual preceptors to assess and coach intangible skills, like critical thinking and self-reflection, to enable the provision of high quality healthcare.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="virtual-preceptor-section section-mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-left">
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
        <div className="patient-satisfaction-section section-mt-100">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-6 text-left">
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