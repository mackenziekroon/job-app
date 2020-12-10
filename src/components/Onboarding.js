import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import firstImg from '../styles/wfh_1.svg'
import secondImg from '../styles/wfh_9.svg'


// EXTRA COPY


export default function Onboarding() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    return (
    
      <Slider className='slider' {...settings} style={{backgroundColor: 'seashell'}}>
        <div className='onboarding-screen'>
        <div>
          <img src={firstImg}   className='onboarding-img' alt="" />
        </div>
        <div className='onboarding-text'>
          <h3>Welcome to seekr </h3>
          <h4 style = {{color: 'rgb(94, 89, 84)'}}>We can not wait to show you around!</h4>
        </div>
        </div>
        <div className='onboarding-screen'>
        <div >
          <img src='https://www.flaticon.com/svg/static/icons/svg/3658/3658885.svg' className='onboarding-img-swipe' alt="" />
        </div>
        <div className='onboarding-text'>
          <h3>You will see a card deck in a second!</h3>
          <h4 style = {{color: 'rgb(94, 89, 84)'}}>We have curated a list of great matches based on your profile. </h4>
        </div>
        </div>
        <div className='onboarding-screen'>
        <div >
          <img src='https://www.flaticon.com/svg/static/icons/svg/617/617822.svg' className='onboarding-img-swipe' alt="" />
        </div>
        <div className='onboarding-text'>
          <h3>Sounds like an oportunity is right for you?</h3>
          <h4 style = {{color: 'rgb(94, 89, 84)'}}> Swipe right! </h4>
        </div>
        </div>
        <div className='onboarding-screen'>
        <div>
          <img src='https://www.flaticon.com/svg/static/icons/svg/617/617821.svg' className='onboarding-img-swipe' alt="" />
        </div>
        <div className='onboarding-text'>
          <h3>Isn't exactly what you are looking for? </h3>
          <h4 style = {{color: 'rgb(94, 89, 84)'}}>Swipe left!</h4>
        </div>
        </div>
        <div className='onboarding-screen'>
        <div>
          <img src='https://www.flaticon.com/svg/static/icons/svg/617/617798.svg' className='onboarding-img-swipe' alt="" />
        </div>
        <div className='onboarding-text'>
          <h3>Want to know more? </h3>
          <h4 style = {{color: 'rgb(94, 89, 84)'}}>Tap to flip the card and read away!</h4>
        </div>
        </div>
        <div className='onboarding-screen-lastpage'>
        <div >
          <img src={secondImg} className="onboarding-img" alt="" />
        </div>
        <div className='onboarding-text-lastpage'>
        <h3 >Here we connect companies and talents all over the country.</h3>
          <h4 style = {{color: 'rgb(94, 89, 84)'}}>A perfect match is waiting, we know!</h4>
          </div>
          <button className="onboarding-button" type="submit">
              Get swiping
            </button>
        </div>
      </Slider>
    
  
      
           
    );
  }
