import React from 'react'
import { Box, Button, CssBaseline, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import EmployeesImage from '../../assets/images/employeesImage.png'
import VectorPic from '../../assets/images/Vector.png'
import CheckIcon from '@mui/icons-material/Check';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { MainBox, SubTitleText } from '../sectionThree/sectionThree';
import { TitleText } from '../sectionTwo/sectionTwo';
import styled from 'styled-components';
import { ImageBox, MainContainer, StyledGrid } from '../sectionOne/sectionOne';
import Aos from 'aos';

const ListArray = [
  "Easy to use mobile & web platform",
  "45,000+ workers",
  "Realtime tracking",
  "95% fulfillment rate",
  "Preferred worker list"
]

export default function SectionFour() {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <MainBox>
        <CssBaseline />
        <MainContainer maxWidth="lg">
          <Grid container>
            <StyledGrid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
              <ImageBox data-aos="fade-right" data-aos-duration="1000">
                <img src={EmployeesImage} alt='employees' />
              </ImageBox>
            </StyledGrid>
            <StyledGrid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
              <Box>
                <Box sx={{ mb: 2 }}>
                  <SubTitleTexts data-aos="fade-up" data-aos-duration="1000">FOR EMPLOYERS</SubTitleTexts>
                  <TitleTexts data-aos="fade-up" data-aos-duration="1000"><span>Workforce</span> At Your Fingertips</TitleTexts>
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
          </Grid>
        </MainContainer>
      </MainBox>
    </React.Fragment>
  )
}
export const SubTitleTexts = styled(SubTitleText)`
&&{
  text-align: start;
}
`;

export const TitleTexts = styled(TitleText)`
&&{
  text-align: start;
}
`;

export const LearnMoreBtn = styled(Button)`
&&{
  fontsize: 16px;
  font-weight: 950;
  color:#212A34;
  background:none;
  text-transform: capitalize;
  border-bottom: 2px solid #11B2A8;
}
`;