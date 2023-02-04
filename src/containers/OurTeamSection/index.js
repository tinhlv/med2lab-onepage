import React from 'react'
import imageTeam02 from '../../assets/images/team/pic_team_02.png'
import imageTeam04 from '../../assets/images/team/pic_team_04.png'

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
                <div className="row teams-row">
                    <div className="col-md-6 position-relative bg-team-left">
                        <div className="team-member-left">
                            <div
                                className="team-member-left__avatar"
                                style={{
                                    backgroundImage: `url(${imageTeam02})`
                                }}
                            ></div>
                            <div className="team-member-left__role">
                                <span className="name">Dr. Bao Truong</span><br />
                                <span className="content">Co-Founder & CEO</span>
                            </div>
                        </div>
                        <div className="bubble-ps-bottom">
                            <div className="bubble-arr-box arrow tl">
                                <div className="content">There’s a tremendous gap that sadly exists between what healthcare workers are tested on in standardized licensing exams and what they’re expected to know and be able to do ‘on the floor’.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="team-content">
                            <p className="team-content__top">
                                With experience ‘on the floor’, Bao has witnessed firsthand the dire need for more high-quality healthcare workers in order to achieve better patient safety and lower healthcare costs. 
                            </p>
                            <div className="team-content__bottom">
                                <p>Bao’s belief that there’s a better way to equip healthcare workers with what they need to know and are able to do is what lead to Med2Labs formation.</p>
                                <p>Our innovate platform developed out of Bao’s  background and passion in tech and medicine.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row flex-row-reverse teams-row">
                    <div className="col-md-6 position-relative bg-team-right">
                        <div className="team-member-right">
                            <div
                                className="team-member-right__avatar"
                                style={{
                                    backgroundImage: `url(${imageTeam04})`
                                }}
                            ></div>
                            <div className="team-member-right__role">
                                <span className="name">Dr. Kumiko Endo</span><br />
                                <span className="content">Co-Founder & COO</span>
                            </div>
                        </div>
                        <div className="bubble-ps-bottom-coo">
                            <div className="bubble-arr-box arrow tr">
                                <div className="content">We want to make learing something that actually changes someones thinking or behaviour while also making that person feel supported in the process.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="team-content">
                            <p className="team-content__top">
                                As a trained sociologist, research and passionate educator, Kumiko is committed to helping empower learners in their continuous growth.
                            </p>
                            <div className="team-content__bottom">
                               <p>Seeing Med2Lab's potential for transforming the current stagnant learning landscape into a dynamic, human-centered learning ecosystem Kumiko joined Med2Lab as c Co-Founder and COO.</p>
                               <p>With her humanistic vision and meaningful client engagements, Kumiko has brought conceptual focus to Med2Lab's product so that our clients can derive unique, meaningful value from our system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default OurTeamSection