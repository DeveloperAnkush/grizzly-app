import React from 'react'
import Header from '../components/header/header'
import SectionOne from '../components/sectionOne/sectionOne'
import SectionTwo from '../components/sectionTwo/sectionTwo'
import SectionThree from '../components/sectionThree/sectionThree'
import SectionFour from '../components/sectionFour/sectionFour'
// import SectionFive from '../components/sectionFive/sectionFive'
import SectionSix from '../components/sectionSix/sectionSix'
import SectionSeven from '../components/sectionSeven/sectionSeven'
import Footer from '../components/footer/footer'

export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <SectionFive /> */}
      <SectionSix />
      <SectionSeven />
      <Footer />
    </React.Fragment>
  )
}
