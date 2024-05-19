import React from 'react'
import { Box, CssBaseline, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import FirstIcon from '../../assets/images/firstIcon.png'
import SecondIcon from '../../assets/images/secondIcon.png'
import ThirdIcon from '../../assets/images/thirdIcon.png'
import FourthIcon from '../../assets/images/fourthIcon.png'
import Connector from '../../assets/images/connectorIcon.png'
import styled from 'styled-components'
import Aos from 'aos'
import { MainContainer } from '../sectionOne/sectionOne'

export default function SectionTwo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <MainBox>
        <CssBaseline />
        <MainContainer maxWidth="lg">
          <TitleText data-aos="fade-up" data-aos-duration="1000"><span>How</span> On-Demand Staffing Works</TitleText>
          <Box data-aos="fade-right" data-aos-duration="2000">
            <Grid container>
              <Grid item md={3} xs={6}>
                <StepBox>
                  <Box className="stepimg">
                    <img src={FirstIcon} alt='steps-icon' />
                    {!isMobile && <img src={Connector} alt='connector' />}
                  </Box>
                  <Typography className='subtitle'>STEP 1</Typography>
                  <Typography className='maintitle'>Quick Signup</Typography>
                  <Typography className='bodytext'>Our Grizzly Force technology makes it easy to sign up in minutes</Typography>
                </StepBox>
              </Grid>
              <Grid item md={3} xs={6}>
                <StepBox>
                  <Box className="stepimg">
                    <img src={SecondIcon} alt='steps-icon' />
                    {!isMobile && <img src={Connector} alt='connector' />}
                  </Box>
                  <Typography className='subtitle'>STEP 2</Typography>
                  <Typography className='maintitle'>Post Jobs 24/7</Typography>
                  <Typography className='bodytext'>{!isMobile ? "Use our mobile app or web platform from the office or on the go, any time of the day" : "Use our mobile app or web any time of the day"}</Typography>
                </StepBox>
              </Grid>
              <Grid item md={3} xs={6}>
                <StepBox>
                  <Box className="stepimg">
                    <img src={ThirdIcon} alt='steps-icon' />
                    {!isMobile && <img src={Connector} alt='connector' />}
                  </Box>
                  <Typography className='subtitle'>STEP 3</Typography>
                  <Typography className='maintitle'>View Matches</Typography>
                  <Typography className='bodytext'>{!isMobile ? "With thousands of ready-to-go workers you can watch your jobs being filled in real time" : "Watch your jobs being filled in real time"}</Typography>
                </StepBox>
              </Grid>
              <Grid item md={3} xs={6}>
                <StepBox>
                  <Box className="stepimg">
                    <img src={FourthIcon} alt='steps-icon' />
                  </Box>
                  <Typography className='subtitle'>STEP 4</Typography>
                  <Typography className='maintitle'>We do the rest!</Typography>
                  <Typography className='bodytext'>We take care of payroll, deductions and insurancce</Typography>
                </StepBox>
              </Grid>
            </Grid>
          </Box>
        </MainContainer>
      </MainBox>
    </React.Fragment>
  )
}

const MainBox = styled(Box)`
  background-color: #11b2a812;
  padding: 50px 0;
`;

export const TitleText = styled(Typography)`
&&{
  font-size: 44px;
  font-weight: 900;
  line-height: 60px;
  text-align: center;
  margin-bottom: 20px;
  span{
    color: #11B2A8
  }
  @media (max-width: 600px){
    font-size: 40px;
    line-height: 52px;
  }
}
`;

const StepBox = styled(Box)`
  padding: 10px; 
  .stepimg{
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    margin-bottom: 5px;
  }
  .subtitle{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 5px;
  }
  .maintitle{
    font-weight: 950;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 5px;
  }
  .bodytext{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #555770;
  }
`;