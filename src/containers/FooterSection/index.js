import React from 'react'
import {Image} from 'react-bootstrap'
import Copyright from '../../components/Copyright'
import imageLogo2x from '../../assets/images/logo@2x.png'

const FooterSection = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-md-6">
                        <p className="text-white">
                            Connect with Med2Lab on <a className="text-white text-underline" href='Twitter' title='LinkedIn'>#LinkedIn</a><br/>
                            <a className="text-white text-underline" href='https://app.med2lab.com' title='Med2Lab Learning Management System'>Med2Lab Learning Management System</a><br/>
                            <a className="text-white text-underline" href='/#team-section' title='#!'>Med2Lab Team</a>
                        </p>
                    </div>
                    <div className="col-md-6 text-right">
                        <Image className="img-baner-right" src={imageLogo2x} width="270px" fluid alt="logo 2x" />
                    </div>
                </div>
                <Copyright text="© Med2Lab Inc. 2023. All Rights Reservered" />
            </div>
        </div>
    )
}
export default FooterSection