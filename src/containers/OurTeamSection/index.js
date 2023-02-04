import React from 'react'
import imageTeam02 from '../../assets/images/team/pic_team_02.png'

const OurTeamSection = () => (
    <div className='team_section'>
        <div className="container">
            <div className="text-center teams-heading">
                <div className="teams-heading__title">
                    <p className="text-brand">Med<span>2</span>Lab</p>
                    <h3>Our Team</h3>
                </div>
                <p className="teams-heading__desc">The Med2Lab team bring together a desire to increase patient saftey through improving healthcare workers learning experince</p>
            </div>
            <div className="teams-detail-section">
                <div className="row">
                    <div className="col-md-6">
                        <div className="team-member">
                            <div 
                                className="team-member__avatar"
                                style={{
                                    backgroundImage: `url(${imageTeam02})`
                                }}
                            ></div>
                            <div className="team-member__role">
                                <span className="member__role--name">Dr. Bao Truong</span><br/>
                                <span className="member__role--content">Co-Founder & CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    </div>
)
export default OurTeamSection