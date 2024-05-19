import React from 'react'
import { Box, Button, Container, CssBaseline, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import GroupMembers from '../../assets/images/group-members.png'
import MobilePic from '../../assets/images/mobilepic.png'
import styled from 'styled-components'
import Aos from 'aos'

export default function SectionOne() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <Box sx={{ margin: "120px 0" }}>
        <CssBaseline />
        <MainContainer maxWidth="lg">
          <Grid container spacing={2}>
            <StyledGrid item md={6} xs={12}>
              <Box data-aos="fade-right" data-aos-duration="1000">
                <HomeTitle>
                  Modern <br /> Temp <span>Labour</span><br /> <span>Solutions</span>
                </HomeTitle>
                <ButtonBox>
                  <StyledButton variant='contained' btncolor="#353843" disableRipple>Find workers</StyledButton>
                  <StyledButton variant='contained' btncolor="#11B2A8" disableRipple>Find a job</StyledButton>
                </ButtonBox>
              </Box>
            </StyledGrid>
            <StyledGrid item md={6} xs={12}>
              <ImageBox data-aos="fade-left" data-aos-duration="1000">
                <img src={isMobile ? MobilePic : GroupMembers} alt="group-members" style={{ objectFit: "cover" }} />
              </ImageBox>
            </StyledGrid>
          </Grid>
        </MainContainer>
      </Box>
    </React.Fragment>
  )
}

export const MainContainer = styled(Container)`
&& {
  padding: 0px 50px;
}
`;

export const StyledGrid = styled(Grid)`
&&{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

export const ImageBox = styled(Box)`
  img{
    max-width: 100%;
    height: 555px;
    padding: 30px 0;
    @media (max-width: 600px){
      height: 428px;
    }
  }
`;

const HomeTitle = styled(Typography)`
&&{
  color: #282C3F;
  font-weight: 900;
  font-size: 60px;
  line-height: 72px;
  span:nth-of-type(1){
    background: linear-gradient(to right, #11B2A8, #353843);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
  }
  span{
    color:#11B2A8;
  }
  margin: 20px 0px;
  @media (max-width: 600px){
    font-size: 40px;
    line-height: 52px;
  }
}`;

const ButtonBox = styled(Box)`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled(Button)`
&&{
  background-color: ${(props) => props.btncolor};
  color: #fff;
  text-transform: capitalize;
  box-shadow: none;
  height: 60px;
  min-width: 160px;
  border-radius: 12px;
  font-weight: 950;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  &:hover{
    background-color:  ${(props) => props.btncolor};
    color: #fff;
    box-shadow: none;
  }
  @media (max-width: 600px){
    height: 52px;
  }
}`;