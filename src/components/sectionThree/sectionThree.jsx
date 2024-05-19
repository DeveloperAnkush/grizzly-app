import React from 'react'
import { Box, CssBaseline, Typography } from '@mui/material'
import ImageSlider from '../slider/imageSlider'
import { TitleText } from '../sectionTwo/sectionTwo';
import styled from 'styled-components';
import Aos from 'aos';
import { MainContainer } from '../sectionOne/sectionOne';

export default function SectionThree() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <MainBox>
        <CssBaseline />
        <MainContainer maxWidth="lg">
          <SubTitleText data-aos="fade-up" data-aos-duration="1000">WE ARE SERVING IN</SubTitleText>
          <TitleText data-aos="fade-up" data-aos-duration="1000"><span>Industries</span> We are Working With</TitleText>
          <Box data-aos="fade-up" data-aos-duration="1000">
            <ImageSlider />
          </Box>
        </MainContainer>
      </MainBox>
    </React.Fragment>
  )
}

export const MainBox = styled(Box)`
  margin: 50px 0;
`;

export const SubTitleText = styled(Typography)`
&&{
  font-size: 14px;
  font-weight:500;
  line-height:20px;
  color: #212A34;
  text-align: center;
}
`;