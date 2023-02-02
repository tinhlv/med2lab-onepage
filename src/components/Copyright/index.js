import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Copyright = (props) => {
    return(
        <div className="footer-bottom mt-5">
            <div className="copyright text-white">
                <p>{props.text}</p>
            </div>
        </div>
    )
}
export default Copyright