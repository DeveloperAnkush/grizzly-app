import React from 'react'
import { Box, CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import JobSeeker from '../../assets/images/jobSeeker.png'
import VectorPic from '../../assets/images/Vector.png'
import CheckIcon from '@mui/icons-material/Check';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { LearnMoreBtn, SubTitleTexts, TitleTexts } from '../sectionFour/sectionFour';
import { ImageBox, MainContainer, StyledGrid } from '../sectionOne/sectionOne';
import { MainBox } from '../sectionThree/sectionThree';
import Aos from 'aos';

const ListArray = [
  "Usee friendly mobile app",
  "New jobs everyday",
  "Payout in 24hrs",
  "Employement benefits",
  "Temporary & permanent positions"
]

export default function SectionSix() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <MainBox>
        <CssBaseline />
        <MainContainer maxWidth="lg">
          <Grid container>
            <StyledGrid item md={6} xs={12}>
              <Box>
                <Box sx={{ mb: 2 }}>
                  <SubTitleTexts data-aos="fade-up" data-aos-duration="1000" >FOR JOB SEEKERS</SubTitleTexts>
                  <TitleTexts data-aos="fade-up" data-aos-duration="1000">Connecting You With <span>Flexible Work</span></TitleTexts>
                  <img src={VectorPic} alt='vector' data-aos="fade-up" data-aos-duration="1000" />
                </Box>
                <Box data-aos="fade-up" data-aos-duration="1000">
                  <List>
                    {ListArray?.map((item) => (
                      <ListItem disablePadding key={item}>
                        <ListItemIcon>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <LearnMoreBtn endIcon={<ExitToAppRoundedIcon />} disableRipple data-aos="fade-up" data-aos-duration="1000">Learn More</LearnMoreBtn>
              </Box>
            </StyledGrid>
            <StyledGrid item md={6} xs={12}>
              <ImageBox data-aos="fade-left" data-aos-duration="1000">
                <img src={JobSeeker} alt='employees' />
              </ImageBox>
            </StyledGrid>
          </Grid>
        </MainContainer>
      </MainBox>
    </React.Fragment>
  )
}
