import React from 'react'
import { Box, Button, Typography, TextField, Grid, List, ListItem, ListItemText, useTheme, useMediaQuery, CssBaseline } from '@mui/material'
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png'
import Playstore from '../../assets/images/playstore.png'
import AppStore from '../../assets/images/appstore.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import { TitleTexts } from '../sectionFour/sectionFour';
import { MainBox } from '../sectionThree/sectionThree';
import Aos from 'aos';
import { MainContainer } from '../sectionOne/sectionOne';

const productList = ["Download", "Price", "Locations", "Server", "Countries", "Blog"];
const enageList = ["Grizzling?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"]
const earnList = ["Affiliate", "Become Partner"]
const socialIcons = [<FacebookIcon />, <TwitterIcon />, <InstagramIcon />, <GitHubIcon />]

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      <FooterMainBox>
        <CssBaseline />
        <MainContainer maxWidth="lg">
          <SubscribeBox>
            <TitleTexts data-aos="fade-up" data-aos-duration="1000">Subscribe To Our <span>Newsletter</span></TitleTexts>
            <SubTitleText data-aos="fade-up" data-aos-duration="1000">Keep up with the Grizzly Force team!</SubTitleText>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '35ch' },
            }} data-aos="fade-up" data-aos-duration="1000">
              <StyledTextField id="outlined-basic" label="Email address" variant="outlined" type='search' />
              <StyledButton variant='contained' btncolor="#11B2A8" disableRipple>Submit</StyledButton>
            </Box>
          </SubscribeBox>
          {!isMobile && (
            <Box data-aos="fade-up" data-aos-duration="1000">
              <Grid container mt={3}>
                <Grid item xs={6}>
                  <Box>
                    <img src={Logo} alt='grizzly' />
                    <SubTitleTexts>
                      Grizzly is a private virtual network that has <br />
                      unique features and has high security.
                    </SubTitleTexts>
                    <AppBox>
                      <img src={Playstore} alt='playstore' />
                      <img src={AppStore} alt='appstore' />
                    </AppBox>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Grid container item xs={12}>
                    <Grid item xs={3}>
                      <Typography>Product</Typography>
                      <List>
                        {productList.map((item) => (
                          <StyledListItem key={item} sx={{ px: 0 }}>
                            <ListItemText>{item}</ListItemText>
                          </StyledListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>Engage</Typography>
                      <List>
                        {enageList.map((item) => (
                          <StyledListItem key={item} sx={{ px: 0 }}>
                            <ListItemText>{item}</ListItemText>
                          </StyledListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>Earn Money</Typography>
                      <List>
                        {earnList.map((item) => (
                          <StyledListItem key={item} sx={{ px: 0 }}>
                            <ListItemText>{item}</ListItemText>
                          </StyledListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          )}
          <CopyRightBox>
            <Typography variant="body2" className='copyright-text'>
              &copy; {new Date().getFullYear()} Grizzly, Inc. All rights reserved
            </Typography>
            <SocialBox>
              {socialIcons.map((item, index) => <span key={index}>{item}</span>)}
            </SocialBox>
          </CopyRightBox>
        </MainContainer>
      </FooterMainBox>
    </React.Fragment>
  )
}

const FooterMainBox = styled(MainBox)`
  margin-bottom: 0px;
  padding: 20px 0px;
  @media (max-width: 600px){
    background-color: #212A34;
    color: #fff;
  }
`;

const SubscribeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubTitleText = styled(Typography)`
&&{
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 600px){
    font-size: 14px;
    line-height: 20px;
    text-align: start;
  }
}
`;

const SubTitleTexts = styled(SubTitleText)`
&&{
  text-align: start;
}
`;

const AppBox = styled(Box)`
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
  width: 122px;
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

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: #11B2A8;
  }
  & .MuiInputBase-root{
    background-color: #fff;
  }
  & .MuiOutlinedInput-root {
    border-color: #11B2A8;
    border-radius: 12px;
    &.Mui-focused fieldset {
      border-color: #11B2A8;
    }
  }
`;

const StyledListItem = styled(ListItem)`
  color: #555770;
`;

const CopyRightBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  .copyright-text {
    color: #212A34;
    @media (max-width: 600px) {
     color: #fff; 
    }
  }
`;

const SocialBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;