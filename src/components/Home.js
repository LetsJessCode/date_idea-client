import React from 'react';
import romance from './images/romance.png'
import sexy from './images/sexy.jpg'
import relax from './images/relaxing.jpeg'
import fun from './images/fun.jpg'
import './Home.css'

const Home = () => {
        return (
            <div className="home">
                <h5>Inhouse Date Nights!!
                    <br /> "staying in, never felt so fun!"</h5>
                <div className="imgContainer">
                    <img src={romance} alt="romance"/>
                    <h6 className="img">Romance </h6>
                    <img src={fun} alt="fun"/>
                    <h6 className="img">Fun</h6>
                    <img src={relax} alt="relax"/>
                    <h6 className="img">Relaxing</h6>
                    <h6 className="img">Adventurous</h6>
                    <img src={sexy} alt="sexy"/>
                    <h6 className="img">Sexy</h6>
                </div>   
            </div>
        )
    }

export default Home