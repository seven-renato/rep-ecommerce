import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from "react";
import { sliderItems } from "../../data.js";
import "./styles/slider.scss"; 

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className='slider-container'>
      <div className='arrow' direction="left" onClick={() => handleClick("left")}>
        <ArrowBackOutlinedIcon style={{ color: '#ffffff' }} />
      </div>
      <div className='wrapper' style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
        {sliderItems.map((item) => (
          <div className='slide' key={item.id} style={{ backgroundColor: item.bg }}>
            <div className='img-container'>
              <img className='image' src={item.img} alt={item.title} />
            </div>
            <div className='info-container'>
              <h1 className='title'>{item.title}</h1>
              <p className='desc'>{item.desc}</p>
              <button className='button'>SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className='arrow' direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardOutlinedIcon style={{ color: '#ffffff' }}/>
      </div>
    </div>
  );
};

export default Slider;
