import React, { Component } from 'react';
import data from './data';
import './style.css';

export default class ContentComponent extends Component {

    render() {
        console.log(data);

        return (
            <div className="App">
                <div className="header">
                    <div className="div1">
                        <div>Crash Course</div>
                        <div className="child-div1">IIT-JEE</div>
                    </div>
                    <div className="div2">
                        <div>12th Grade</div>
                        <div className="child-div2">IIT-JEE</div>
                    </div>
                    <div className="div3">
                        <div>Crash Course</div>
                        <div className="child-div3">NEET</div>
                    </div>
                </div>
                <div className="content">
                    <div className="timings">
                        {
                            data.timeSlots.map((times, index) => {
                                return (
                                    <div key={index} className="each-time">
                                        {times}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="courses">
                        {
                            data.courses.map((eachCourse, index) => {
                                return (
                                    <div key={index} className="course-container">
                                        {
                                            eachCourse.details.map((eachDetails, ind) => {
                                                const courseClassName = eachDetails.courseName === 'Physics' ? 'each-course physics' :
                                                    (eachDetails.courseName === 'Chemistry' ? 'each-course chemistry' : 'each-course mathematics');

                                                const detailsClass = eachDetails.courseName === 'Physics' ? 'course-details physics-details' :
                                                    (eachDetails.courseName === 'Chemistry' ? 'course-details chem-details' : 'course-details maths-details')
                                                return (
                                                    <div key={ind} className={courseClassName}>
                                                        <div className={detailsClass}>{eachDetails.courseName}</div>
                                                        <div className='course-details'>{eachDetails.topicName}</div>
                                                        {
                                                            eachDetails.teacherName &&
                                                            <div className='course-details'>By<span className="teacher">{eachDetails.teacherName}</span></div>
                                                        }
                                                        <div className='course-details'>{eachDetails.timings}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="live">Live</div>
                <div className="now-playing">Now Playing</div>
                <div className="footer" />
            </div>
        )
    }
}
