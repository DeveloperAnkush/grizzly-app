import React from 'react'
import Slider from 'react-slick';
import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'
import Image4 from '../../assets/images/image4.png'
import Image5 from '../../assets/images/image5.png'
import Image6 from '../../assets/images/image6.png'
import { Box } from '@mui/material';
import styled from 'styled-components';

export default function ImageSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    autoplay: true,
    speed: 800,
    autoplaySpeed: 800,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  const imageArray = [
    { imgSrc: Image1, title: "Warehousing" },
    { imgSrc: Image2, title: "Manufacturing" },
    { imgSrc: Image3, title: "Food & Beverage" },
    { imgSrc: Image4, title: "Hospitality" },
    { imgSrc: Image5, title: "Reataurants" },
    { imgSrc: Image6, title: "Event Services" }
  ];
  return (
    <React.Fragment>

      <Box className="slider-container">
        <Slider {...settings}>
          {imageArray.map((item) => (
            <ImageBox key={item.title}>
              <img src={item.imgSrc} alt={item.title} loading="lazy" className='slider-img' />
            </ImageBox>
          ))}
        </Slider>
      </Box>
    </React.Fragment >
  )
}

const ImageBox = styled(Box)`
  height: 200px;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  .slider-img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
`