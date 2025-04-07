import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { HeaderLandingPage } from "./landing-page/Header";
import { Hero } from "./landing-page/Hero";
import { Pricing } from "./landing-page/Pricing";
import { Footer } from "./landing-page/Footer";
import { Services } from "./landing-page/Services";

function LandingPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen min-w-[400px] w-full bg-white">
      <Helmet titleTemplate={t("pageTitle")} title={t("pageTitle")} />
      <HeaderLandingPage />
      <main className="flex flex-col mt-20">
        <div className=" mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Hero />
          <Services />
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage; 
