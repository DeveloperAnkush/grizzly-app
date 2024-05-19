import React from 'react';
import { Link } from 'react-router-dom';
import { Box, CssBaseline, Grid, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MapImage from '../../assets/images/map-image.png';
import { SubTitleTexts, TitleTexts } from '../sectionFour/sectionFour';
import styled from 'styled-components';
import { ImageBox, MainContainer, StyledGrid } from '../sectionOne/sectionOne';
import { MainBox } from '../sectionThree/sectionThree';
import Aos from 'aos';

export default function SectionSeven() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <MainBox>
        <CssBaseline />
        <MainContainer maxWidth="lg">
          <Grid container mb={5}>
            <StyledGrid item md={6} xs={12}>
              <Box data-aos="fade-right" data-aos-duration="1000">
                <SubTitleTexts>GRIZZLY FORCE CITIES</SubTitleTexts>
                <TitleTexts>
                  <span>Serving</span> The Greater <br />
                  Vancouver&#44; Victoria&#44; <br />
                  Okanagan&#44; Calgary &amp; <br />
                  Toronto <span>Areas</span>
                </TitleTexts>
              </Box>
            </StyledGrid>
            <StyledGrid item md={6} xs={12}>
              <ImageBox data-aos="fade-left" data-aos-duration="1000">
                <img src={MapImage} alt='map' />
              </ImageBox>
            </StyledGrid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <AdditionalButton data-aos="fade-up" data-aos-duration="1000">
                <Typography className='btntext'>Looking for additional help?</Typography>
                <Link className='link'>Find Workers <span><ArrowOutwardIcon fontSize='small' /></span></Link>
              </AdditionalButton>
            </Grid>
            <Grid item md={6} xs={12}>
              <CashButton data-aos="fade-up" data-aos-duration="1000">
                <Typography className='btntext'>Looking for extra cash?</Typography>
                <Link className='link'>Find a Job <span><ArrowOutwardIcon fontSize='small' /></span></Link>
              </CashButton>
            </Grid>
          </Grid>
        </MainContainer>
      </MainBox>
    </React.Fragment>
  )
}

const AdditionalButton = styled(Box)`
  background-color: #282C3F;
  color: #fff;
  padding:20px;
  border-radius:10px;
  .btntext{
    font-size: 32px;
    font-weight: 950;
    line-height: 40px;
    margin-bottom: 5px;
    @media (max-width: 600px){
      font-size: 20px;
      line-height: 32px;
    }
  }
  .link{
    text-decoration: none;
    font-weight: 950;
    font-size:16px;
    line-height: 24px;
    color: #11B2A8;
    @media (max-width: 600px){
      font-size: 12px;
    }
  }
`;

const CashButton = styled(Box)`
  background-color:  #11B2A8;
  color: #fff;
  padding:20px;
  border-radius:10px;
  .btntext{
    font-size: 32px;
    font-weight: 950;
    line-height: 40px;
    margin-bottom: 5px;
    text-align: right;
    @media (max-width: 600px){
      font-size: 20px;
      line-height: 32px;
    }
  }
  .link{
    text-decoration: none;
    font-weight: 950;
    font-size:16px;
    line-height: 24px;
    color: #fff;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 600px){
      font-size: 12px;
    }
  }
`;