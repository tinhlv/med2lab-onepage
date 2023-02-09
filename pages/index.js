import React from "react"
import MainLayout from '../src/components/Layout'
import BannerSection from '../src/containers/BannerSection'
import PartnersSection from '../src/containers/PartnersSection'
import LMSSection from '../src/containers/LMSSection'
import OurSolutionsSection from '../src/containers/OurSolutionsSection'
import OurTeamSection from '../src/containers/OurTeamSection'
import ScheduleCallSection from '../src/containers/ScheduleCallSection'
import FooterSection from '../src/containers/FooterSection'

function index() {
  return (
    <MainLayout>
      <BannerSection />
      <LMSSection />
      <OurSolutionsSection />
      <OurTeamSection />
      <ScheduleCallSection />
      <FooterSection />
    </MainLayout>
  );
}

index.getInitialProps = () => {
  return {};
};

export default index;