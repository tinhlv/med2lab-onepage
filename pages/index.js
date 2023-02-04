import React from "react"
import MainLayout from '../src/components/Layout'
import BannerSection from '../src/containers/BannerSection'
import PartnersSection from '../src/containers/PartnersSection'
import LMSSection from '../src/containers/LMSSection'
import OurSolutionsSection from '../src/containers/OurSolutionsSection'
import OurTeamSection from '../src/containers/OurTeamSection'
import FooterSection from '../src/containers/FooterSection'

function index() {
  return (
    <MainLayout>
      <BannerSection />
      <div className="main-content">
        <PartnersSection />
        <LMSSection />
        <OurSolutionsSection />
        <OurTeamSection />
      </div>
      <FooterSection />
    </MainLayout>
  );
}

index.getInitialProps = () => {
  return {};
};

export default index;